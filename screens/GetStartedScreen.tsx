import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';

export default function GetStartedScreen() {
    const {params} = useRoute();
    const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assents/images/backgroundLogin.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
        <View className="flex-1 justify-center items-center bg-black/50">
            <Text className="text-white mt-20 mr-auto ml-5">
                v 0.0.1
            </Text>
            <View className=" w-full h-full flex justify-around items-center">
                <View className="flex items-center">
                    <Text className="text-white text-center font-bold tracking-wider text-5xl">
                        Welcome to <Text className="text-blue-900">Harmony House</Text>
                    </Text>
                    <Text className="text-white font-bold tracking-wider text-lg">
                        Get Started!
                    </Text>
                </View>
                <TouchableOpacity className="bg-blue-900 w-80 p-4 rounded-2xl"
                onPress={() => navigation.navigate('Login')}
                >
                    <Text className="text-center font-medium">
                        Enter
                    </Text>
                </TouchableOpacity>
            </View>
        </View>     
    </ImageBackground>
  );
}
