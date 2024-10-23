import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ImageBackground, TextInput, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, ScrollView } from 'react-native';
import * as Icon from "react-native-feather";

export default function LoginScreen() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // função para enviar a requisição de login
    const handleLogin = async () => {
        // verifica se email e senha estão preenchidos
        if (!email || !password) {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }

        try {
            // requisição POST para o backend pela url
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const result = await response.json();

            if (response.status === 200) {
                // navega para próxima tela se login foi bem sucedido
                navigation.navigate('Harmony House');
            } else {
                // exibe a mesnagem de erro
                Alert.alert("Login error", result.error || "Invalid credentials");
            }

        } catch (error) {
            console.error(error);
            Alert.alert("Error", "An error occurred while trying to log in.");
        }
    };

    return (
        <ImageBackground
            source={require('../assets/images/backgroundGetStarted.png')}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0} 
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                    <View className="flex-1 justify-center items-center ">
                        <View className="w-full h-full flex">
                            <View className="flex items-center">
                                <Text className="text-white font-bold tracking-wider text-3xl mt-52 mb-44">
                                    Login to your account
                                </Text>
                            </View>
                            <View className="flex items-center mx-4 space-y-4">
                                <View className="bg-white p-4 rounded-2xl w-full mb-3 flex-row">
                                    <Icon.Mail className="text-blue-900 mr-2" />
                                    <TextInput
                                        placeholder="Email"
                                        placeholderTextColor={'gray'}
                                        keyboardType="email-address" 
                                        autoCapitalize="none"
                                        value={email}
                                        onChangeText={setEmail}
                                    />
                                </View>
                                <View className="bg-white p-4 rounded-2xl w-full mb-3 flex-row">
                                    <Icon.Lock className="text-blue-900 mr-2" />
                                    <TextInput
                                        placeholder="Password"
                                        placeholderTextColor={'gray'}
                                        secureTextEntry
                                        value={password}
                                        onChangeText={setPassword}
                                    />
                                </View>
                                <TouchableOpacity
                                    className="bg-blue-900 w-full p-4 rounded-2xl"
                                    onPress={handleLogin}
                                >
                                    <Text className="text-white text-center font-medium shadow-md">ENTER</Text>
                                </TouchableOpacity>
                                <View className="flex-row justify-between items-center">
                                    <Text className="text-white">Don't have an account?</Text>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('SignUp')}
                                        className="rounded-full p-0.5 ml-2"
                                    >
                                        <Text className="text-sky-500"> SignUp</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}
