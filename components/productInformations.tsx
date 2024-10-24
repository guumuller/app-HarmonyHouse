import { View, Text, ScrollView, Image } from "react-native";
import React from 'react';
import { useRoute, useNavigation } from "@react-navigation/native";

export default function ProductInformations({}) {
    const { params } = useRoute();
    const navigation = useNavigation();
    let item = params;

    return (
        <ScrollView 
            contentContainerStyle={{ paddingTop: 0 }}
            className="mb-20"
        >
            <View className="flex-row justify-between mt-5 px-5">
                <Text className="font-bold text-lg">{item.name}</Text>
                <Text className="font-bold text-xl">${item.price}</Text>
            </View>
            <View className="flex-row space-x-2 my-1 justify-between px-5 pb-3">
                <Text>Products in stock: {item.stock}</Text>
                <View className="flex-row items-center space-x-1">
                    <Image source={require('../assets/images/icons/star.png')} className="h-4 w-4" />
                    <Text className="text-green-700">{item.stars}</Text>
                    <Text className="text-gray-700 text-xs">({item.reviews} reviews)</Text>
                </View>
            </View>
            
            <Text className="px-5 mt-5 text-xl">General Description</Text>
            <Text className="px-5 mt-2">{item.productDeatilsOne}</Text>
            <Text className="px-5 mt-2">{item.productDeatilsTwo}</Text>
            <Text className="px-5 mt-2">{item.productDetailsThree}</Text>

            <Text className="px-5 mt-5 text-xl">Features</Text>
            <Text className="px-5 mt-2">{item.productDeatilsFour}</Text>
            <Text className="px-5 mt-2">{item.productDeatilsFive}</Text>
            <Text className="px-5 mt-2">{item.productDetailsSix}</Text>

            <Text className="px-5 mt-5 text-xl">Specifications</Text>
            <Text className="px-5 mt-2">{item.productDetailsSeven}</Text>
            <Text className="px-5 mt-2">{item.productDetailsEight}</Text>
            <Text className="px-5 mt-2">{item.productDetailsNine}</Text>
        </ScrollView>
    );
}
