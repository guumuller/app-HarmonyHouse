import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { ImageBackground, TextInput, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import * as Icon from "react-native-feather";
import MaskInput from 'react-native-mask-input';
import { z } from "zod";

const schema = z.object({
    username: z.string().nonempty("Username is required"),
    email: z.string().nonempty("Email is required").email("Invalid email format"),
    phoneNumber: z.string().nonempty("Phone number is required").regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Invalid phone number format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().nonempty("Confirm password is required"),
    }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
    });

export default function SignUpScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async () => {
        try {
            const result = schema.parse({ username, email, phoneNumber, password, confirmPassword });
    
            const response = await fetch('http://127.0.0.1:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    phone_number: phoneNumber,
                    password,
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                navigation.navigate('Welcome');
            } else {
                setErrors({ apiError: data.error });
            }
    
        } catch (err) {
            if (err instanceof z.ZodError) {
                const formattedErrors = {};
                err.errors.forEach((error) => {
                    formattedErrors[error.path[0]] = error.message;
                });
                setErrors(formattedErrors);
            }
        }
    };

    return (
        <ImageBackground
        source={require('../assents/images/backgroundGetStarted.png')}
        style={{ flex: 1 }}
        resizeMode="cover"
        >
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View className="flex-1 justify-center items-center ">
                <View className="w-full h-full flex">
                <View className="flex items-center">
                    <Text className="text-white font-bold tracking-wider text-3xl my-10">
                    Create your account and start browsing!
                    </Text>
                    <Image source={require('../assents/images/logoHarmonyHouse.png')}
                    className="h-40 w-48 mb-5"
                    />
                </View>

                <View className="flex items-center mx-4 space-y-4">
                    <View className="bg-white p-4 rounded-2xl w-full mb-3 flex-row">
                    <Icon.User className="text-blue-900 mr-2" />
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor={'gray'}
                        autoCapitalize="none"
                        value={username}
                        onChangeText={setUsername}
                    />
                    </View>
                    {errors.username && <Text style={{ color: 'red' }}>{errors.username}</Text>}

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
                    {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

                    <View className="bg-white p-4 rounded-2xl w-full mb-3 flex-row">
                    <Icon.Phone className="text-blue-900 mr-2" />
                    <MaskInput
                        placeholder="(99) 99999-9999"
                        placeholderTextColor={'gray'}
                        keyboardType="numeric"
                        autoCapitalize="none"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    />
                    </View>
                    {errors.phoneNumber && <Text style={{ color: 'red' }}>{errors.phoneNumber}</Text>}

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
                    {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

                    <View className="bg-white p-4 rounded-2xl w-full mb-3 flex-row">
                    <Icon.Check className="text-blue-900 mr-2" />
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor={'gray'}
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    </View>
                    {errors.confirmPassword && <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>}

                    <TouchableOpacity
                    className="bg-blue-900 w-full p-4 rounded-2xl mb-10"
                    onPress={handleSubmit}
                    >
                    <Text className="text-white text-center font-medium shadow-md">Create</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
        </ImageBackground>
    );
}

