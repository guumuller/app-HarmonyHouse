import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { ImageBackground, TextInput, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import * as Icon from "react-native-feather";
import MaskInput from 'react-native-mask-input';

export default function SignUpScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();

  // Estados para controlar os inputs
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(''); // Estado para mensagem de erro
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitPressed, setIsSubmitPressed] = useState(false); // Estado para verificar se o botão foi pressionado

  // Função de validação de email
  const validateEmail = (text) => {
    setEmail(text);
    // Limpa a mensagem de erro se o texto contém '@', mas só se o botão não foi pressionado
    if (isSubmitPressed && !text.includes('@')) {
      setEmailError('Preencha o campo corretamente'); // Mostra a mensagem de erro
    } else {
      setEmailError(''); // Limpa a mensagem de erro se for válido
    }
  };

  const handleSubmit = () => {
    setIsSubmitPressed(true); // Define que o botão foi pressionado

    // Verifica se todos os campos estão preenchidos e válidos
    if (email.includes('@') && phoneNumber.length > 0) {
      // Navega para a próxima tela se tudo estiver correto
      navigation.navigate('Harmony House');
    } else {
      // Caso contrário, exibe a mensagem de erro
      if (!email.includes('@')) {
        setEmailError('Preencha o campo corretamente');
      }
    }
  };

  return (
    <ImageBackground
      source={require('../assents/images/backgroundLogin.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View className="flex-1 justify-center items-center bg-black/50">
            <View className="w-full h-full flex">
              <View className="flex items-center">
                <Text className="text-white font-bold tracking-wider text-3xl my-10">
                  Create Account
                </Text>
              </View>
              <View className="flex items-center mx-4 space-y-4">
                <View className="bg-white p-4 rounded-2xl w-full mb-3 flex-row">
                  <Icon.User className="text-blue-900 mr-2" />
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor={'gray'}
                    autoCapitalize="none"
                  />
                </View>

                {/* Input de Email */}
                <View className="bg-white p-4 rounded-2xl w-full mb-3 flex-row">
                  <Icon.Mail className="text-blue-900 mr-2" />
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor={'gray'}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email} // Conecta ao estado do email
                    onChangeText={(text) => validateEmail(text)} // Valida o email
                  />
                </View>
                {/* Exibir mensagem de erro se o email for inválido */}
                {isSubmitPressed && emailError ? (
                  <Text className="text-red-500">{emailError}</Text>
                ) : null}

                <View className="bg-white p-4 rounded-2xl w-full mb-3 flex-row">
                  <Icon.Phone className="text-blue-900 mr-2" />
                  <MaskInput
                    placeholder="(99) 99999-9999"
                    placeholderTextColor={'gray'}
                    keyboardType="numeric"
                    autoCapitalize="none"
                    value={phoneNumber}
                    onChangeText={(masked, unmasked) => setPhoneNumber(masked)}
                    mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} 
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
                <View className="bg-white p-4 rounded-2xl w-full mb-3 flex-row">
                  <Icon.Check className="text-blue-900 mr-2" />
                  <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={'gray'}
                    secureTextEntry
                  />
                </View>
                <TouchableOpacity
                  className="bg-blue-900 w-full p-4 rounded-2xl mb-10"
                  onPress={handleSubmit} // Chama a função de envio
                >
                  <Text className="text-center font-medium">Create</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
