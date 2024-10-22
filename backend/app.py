from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # para permitir requisições de diferentes origens

# conecta banco mysql
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# modelo tabela users
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone_number = db.Column(db.String(15), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

# cria o banco
with app.app_context():
    db.create_all()

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # verifica se o usuário existe pelo email
    user = User.query.filter_by(email=email).first()

    if user and user.password == password:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"error": "Invalid email or password"}), 401


# rota cadastro de usuários
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    try:
        new_user = User(
            username=data['username'],
            email=data['email'],
            phone_number=data['phone_number'],
            password=data['password']
        )
        
        db.session.add(new_user)
        db.session.commit()
        
        # exibe usuário no terminal
        print(f"Novo usuário criado: {new_user.username}, email: {new_user.email}, telefone: {new_user.phone_number}, senha: {new_user.password}")
        
        return jsonify({"message": "User created successfully"}), 201
    
    except IntegrityError as e:
        db.session.rollback()
        return jsonify({"error": "User with this email or phone number already exists"}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# inicia o server
if __name__ == '__main__':
    app.run(debug=True)
