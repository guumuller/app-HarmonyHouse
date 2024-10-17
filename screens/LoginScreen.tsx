import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, TextInput, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import * as Icon from "react-native-feather";

export default function LoginScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();

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
            <View className="flex-1 justify-center items-center ">
                <View className="w-full h-full flex justify-around">
                    <View className="flex items-center">
                        <Text className="text-white font-bold tracking-wider text-3xl">
                        Login to your account
                        </Text>
                    </View>
                    <View className="flex items-center mx-4 space-y-4">
                    <View className="bg-white p-4 rounded-2xl w-full mb-3 flex-row">
                        <Icon.Mail className="text-blue-900 mr-2" />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={'gray'}
                            keyboardType="email-address" // Tipo de teclado específico para email
                            autoCapitalize="none"
                        />
                    </View>
                    <View className="bg-white p-4 rounded-2xl w-full mb-3 flex-row">
                        <Icon.Lock className="text-blue-900 mr-2" />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={'gray'}
                            secureTextEntry
                        />
                    </View>
                    <TouchableOpacity
                        className="bg-blue-900 w-full p-4 rounded-2xl"
                        onPress={() => navigation.navigate('Harmony House')}
                        >
                        <Text className="text-white text-center font-medium shadow-md">Enter</Text>
                        </TouchableOpacity>

                        <View className="flex-row justify-between items-center">
                        <Text className="text-white">Don't have an account?</Text>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        className="bg-gray-300 rounded-full p-0.5 ml-2"
                        >
                            <Text className="text-black"> SignUp</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    </ImageBackground>
  );
}
