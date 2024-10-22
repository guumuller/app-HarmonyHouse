import { View, Text, ScrollView, Image } from "react-native"
import React from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ProductCarousel({}) {
    const { params } = useRoute();
    const navigation = useNavigation();
    let item = params;
    
    return (
            <View className="aspect-auto flex-row mt-10">
                <Image source={item.image} className="h-96 w-72 rounded-2xl ml-2 mr-2" />
            </View>      
    );
}