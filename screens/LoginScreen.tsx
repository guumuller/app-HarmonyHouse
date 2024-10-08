import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, TextInput, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import * as Icon from "react-native-feather";

export default function LoginScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assents/images/backgroundLogin.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Define o comportamento para iOS e Android
      >
          <View className="flex-1 justify-center items-center bg-black/50">
            <View className="w-full h-full flex justify-around">
              <View className="flex items-center">
                <Text className="text-white font-bold tracking-wider text-3xl">
                  Login
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
                  <Text className="text-center font-medium">Enter</Text>
                </TouchableOpacity>

                <View className="flex-row justify-between">
                  <Text className="text-white">Don't have an account?</Text>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('SignUp')}
                  >
                    <Text className="text-sky-600"> SignUp</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
