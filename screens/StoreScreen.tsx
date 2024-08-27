import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import React from 'react'
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from 'react-native-feather'
import navigation from "@/app/navigation";
import HomeScreen from "./HomeScreen";

export default function StoreScreen() {
    const {params} = useRoute();
    const navigation = useNavigation();
    let item = params;
    
    return (
        <View>
            <ScrollView>
                <View className="relative">
                    <Image className="w-full h-72" source={item.image} />
                    <TouchableOpacity
                    onPress={()=> navigation.goBack()}
                    className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow [blue-900]"
                    
                    >
                        <Icon.ArrowLeft strokeWidth={3} className="text-blue-900"  />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}