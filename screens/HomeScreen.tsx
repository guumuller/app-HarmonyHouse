import { View, Text, StatusBar, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useContext } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import Categories from "@/components/categories";
import FeaturedRow from "@/components/featuredRow";
import { featured } from "@/constants";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "@/components/cartContext";

export default function HomeScreen() {
    const navigation = useNavigation();
    const { cartItems } = useContext(CartContext);

    return (
        <SafeAreaView className="bg-white">
            <View className="flex-row justify-between p-4">
                <Image source={require('../assets/images/logoHarmonyHouse.png')}
                    className="h-10 w-40"
                />
                <View className="flex-row justify-between">
                    <TouchableOpacity className="pr-5">
                        <Icon.User className="text-blue-900 p-4" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Cart')}
                    >
                        <Icon.ShoppingCart className="text-blue-900 p-4" />
                        <View className="absolute right-0 top-0 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center -mr-1 -mt-1">
                            <Text className="text-white text-xs">{cartItems.length}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <StatusBar barStyle="dark-content" />
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder="Search" className="ml-1 flex-1" />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.Archive height="20" width="20" stroke="gray" />
                    </View>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}
            >

                <Categories />

                <View className="mt-5">
                    {featured.map((item, index) => (
                        <FeaturedRow
                            key={index}
                            title={item.title}
                            stores={item.stores}
                            description={item.description}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
