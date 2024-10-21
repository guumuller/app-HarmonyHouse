from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, User

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.cli.command("create-db")
def create_db():
    """Create the database."""
    db.create_all()
    print("Database created!")

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    user_list = [
        {
            "username": user.username,
            "email": user.email,
            "phone_number": user.phone_number
        } for user in users
    ]
    return jsonify(user_list), 200

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json

    if not all(k in data for k in ("username", "email", "phone_number", "password")):
        return jsonify({"error": "Missing fields"}), 400

    existing_user_by_email = User.query.filter_by(email=data['email']).first()
    if existing_user_by_email:
        return jsonify({"error": "Email already registered"}), 400

    existing_user_by_username = User.query.filter_by(username=data['username']).first()
    if existing_user_by_username:
        return jsonify({"error": "Username already taken"}), 400

    new_user = User(
        username=data['username'],
        email=data['email'],
        phone_number=data['phone_number'],
        password=data['password'],  
    )

    db.session.add(new_user)

    try:
        db.session.commit()
        return jsonify({"message": "User created successfully"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True)
