import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, TextInput, View, Text, TouchableOpacity, Image } from 'react-native';
import { User } from 'react-native-feather';

export default function WelcomeScreen() {
    const {params} = useRoute();
    const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assents/images/backgroundGetStarted.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
        <View>
            <Text>
                Welome 
            </Text>
        </View>
    </ImageBackground>
  );
}
