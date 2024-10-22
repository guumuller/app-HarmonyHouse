import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';

export default function WelcomeScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../assents/images/backgroundGetStarted.png')}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            <View style={{ flex: 1}} className="justify-center items-center">
                <Text style={{ fontSize: 24}} className="font-bold text-white">
                    User created successfully!
                </Text>
                <Text style={{ fontSize: 24}} className="font-bold text-white">
                    Log in to proceed.
                </Text>
                <TouchableOpacity 
                    className="bg-blue-900 w-80 p-4 rounded-2xl shadow-md mt-10"
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text className="text-center">
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
