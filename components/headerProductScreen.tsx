import { View, Text, TouchableOpacity } from "react-native"
import React from 'react'
import * as Icon from 'react-native-feather'
import { useRoute, useNavigation } from "@react-navigation/native";

export default function HeaderProductScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();
    let item = params;

    return (
            <View className="absolute top-0 left-0 right-0 z-10 flex-row justify-between items-center p-5">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="bg-gray-50 p-2 rounded-full shadow"
                >
                    <Icon.ArrowLeft strokeWidth={3} className="text-blue-900"  />
                </TouchableOpacity>
                <Text className="font-bold text-xl">{item.name}</Text>
                <TouchableOpacity
                    className="bg-gray-50 p-2 rounded-full shadow"
                >
                    <Icon.Heart className="text-blue-900"  />
                </TouchableOpacity>
            </View>
    )
}