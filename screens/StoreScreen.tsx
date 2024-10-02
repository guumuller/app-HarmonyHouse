import { View, Text, ScrollView, Image, TouchableOpacity, VirtualizedList, Linking, ImageBackground } from "react-native"
import React from 'react'
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from 'react-native-feather'
import navigation from "@/app/navigation";
import HomeScreen from "./HomeScreen";
import ProductRow from "@/components/productRow";

export default function StoreScreen() {
    const {params} = useRoute();
    const navigation = useNavigation();
    let item = params;
    
    return (
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
                <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                    className="bg-white -mt-12 pt-6"
                >
                    <View className="px-5">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-3xl font-bold">{item.name}</Text>
                            <TouchableOpacity>
                                <Icon.Map className="text-blue-900" />
                            </TouchableOpacity>   
                        </View>
                        <View className="flex-row space-x-2 my-1">
                            <Text className="font-semibold">{item.category}</Text>
                            <View className="flex-row items-center space-x-1">
                                <Icon.MapPin color="gray" width="15" height="15" />
                                <Text className="text-gray-700 text-xs">{item.addres}</Text>
                            </View>
                        </View>
                        <View className="flex-row items-center space-x-1">
                                <Image source={require('../assents/images/star.png')} className="h-4 w-4" />
                                <Text className="text-xs">
                                    <Text className="text-green-700">{item.stars}</Text>
                                    <Text className="text-gray-700">
                                    ({item.reviews} reviews)  
                                    </Text>
                                </Text>
                            </View>
                        <Text className="text-base mt-5">{item.description}</Text>
                    </View>
                    <View className="flex-row justify-between p-4">
                        <Text className="font-bold">Best Sellers</Text>
                        <TouchableOpacity>
                            <Text className="text-blue-900 font-semibold">See all</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/* products */}
                    {
                        item.product.map((product, index)=> <ProductRow item={{...product}} key={index} />)
                    }
                </View>
            </ScrollView>
    )
}