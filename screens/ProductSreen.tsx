import { View, Text, StatusBar, TextInput, ScrollView, TouchableOpacity, Image } from "react-native"
import React from 'react'
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from 'react-native-feather'
import { SafeAreaView } from "react-native-safe-area-context";


export default function ProductScreen({}) {
    const {params} = useRoute();
    const navigation = useNavigation();
    let item = params;
    return(
        <SafeAreaView className="bg-white">
            <View className="relative flex-row justify-between items-center mb-5">
                <TouchableOpacity
                    onPress={()=> navigation.goBack()}
                className="a left-4 bg-gray-50 p-2 rounded-full shadow [blue-900]"
                        
                >
                    <Icon.ArrowLeft strokeWidth={3} className="text-blue-900"  />
                </TouchableOpacity>
                <Text
                    className="font-bold text-xl"
                >{item.name}</Text>
                <TouchableOpacity
                className=" right-4 bg-gray-50 p-2 rounded-full shadow [blue-900]"
                        
                >
                    <Icon.Heart className="text-blue-900"  />
                </TouchableOpacity>
            </View>
            <View className="items-center">
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="overflow-visible"
                    
                >
                    
                    <View className="border-solid border-2 rounded-2xl">
                        <Image source={item.image} className="h-96 w-64 rounded-3xl" />
                    </View>
                    
                    
                    
                </ScrollView>
            </View>
            
            <View className="items-center mt-5">
                <Text>{item.detailDescription}</Text>
            </View>
        </SafeAreaView>

    )
}