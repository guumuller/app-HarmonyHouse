import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, TextInput, View, Text, TouchableOpacity, Image } from 'react-native';

export default function GetStartedScreen() {
    const {params} = useRoute();
    const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assents/images/backgroundGetStarted.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
        <View className=" w-full h-full justify-center items-center">
            <View className="flex items-center">
                <Text className="text-white text-center font-bold text-5xl mb-32">
                    Welcome
                </Text>
                <Image source={require('../assents/images/logoHarmonyHouse.png')}
                    className="h-40 w-48 mb-32"
                />
                <TouchableOpacity className="bg-blue-900 w-80 p-4 rounded-2xl shadow-md"
                    onPress={() => navigation.navigate('Login')}
                    >
                    <Text className="text-white text-center font-medium">
                        GET STARTED
                    </Text>
                </TouchableOpacity>
            </View>
        </View>  
    </ImageBackground>
  );
}
