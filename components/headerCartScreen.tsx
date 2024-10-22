import { View, Text, TouchableOpacity } from "react-native"
import React, { useState } from 'react'
import * as Icon from 'react-native-feather'
import { useRoute, useNavigation } from "@react-navigation/native";

export default function HeaderCartScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();
    const [isHeartRed, setIsHeartRed] = useState(false);  // controla a cor do ícone coraçãl
    let item = params;

    const handleHeartPress = () => {
        setIsHeartRed(!isHeartRed);  // alterna entre vermelho e cor a cor original (azul)
    };

    return (
            <View className="absolute top-0 left-0 right-0 z-10 flex-row justify-between items-center p-5"
            
            >   
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="bg-gray-50 p-2 rounded-full shadow"
                >
                    <Icon.ArrowLeft strokeWidth={3} className="text-blue-900"  />
                </TouchableOpacity>
                <Text className="text-2xl font-bold">My Cart</Text>    
            </View>
    )
}