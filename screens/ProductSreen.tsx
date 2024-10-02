import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import React from 'react'
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from 'react-native-feather'
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderProductScreen from "@/components/headerProductScreen";

export default function ProductScreen({}) {
    const { params } = useRoute();
    const navigation = useNavigation();
    let item = params;

    return (
        <SafeAreaView className="bg-gray-200 flex-1"> 
            {/* Fixed Header */}
            <HeaderProductScreen />

            {/* Scrollable content */}
            <ScrollView className="pt-5">
                <View className="flex-row space-x-2 my-1 justify-between px-4 pb-3">
                    <Text>Products in stock: {item.stock}</Text>
                    
                    <View className="flex-row items-center space-x-1">
                    <Image source={require('../assents/images/star.png')} className="h-4 w-4" />
                        <Text className="text-green-700">{item.stars}</Text>
                        <Text className="text-gray-700 text-xs">({item.reviews}reviews)</Text>
                    </View>
                </View>
                <View className="items-center">
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="overflow-visible"
                    >  
                        <View className="rounded-2xl ml-1 mr-1">
                            <Image source={item.image} className="h-96 w-72 rounded-2xl" />
                        </View>
                    </ScrollView>
                </View>
                
                <View className="items-center mt-5 px-5">
                    <Text>{item.description}</Text>
                    <Text>{item.detailDescription}</Text>
                </View>
            </ScrollView>

            {/* Fixed Cart Button */}
            <View className="absolute bottom-5 left-0 right-0 items-center flex-row justify-between px-10">
                <TouchableOpacity className="bg-blue-900 flex-row items-center py-3 px-7 rounded-full">
                    <Icon.ShoppingCart color="white" />
                    <Text className="text-white ml-2">Add to cart</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-900 flex-row items-center py-3 px-7 rounded-full">
                    <Text className="text-white ml-2">Buy now</Text>
                    <Icon.ArrowRight color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
