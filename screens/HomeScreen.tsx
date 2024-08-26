//Página principal
import { View, Text, StatusBar, TextInput, ScrollView } from "react-native"
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import * as Icon from "react-native-feather";
import Categories from "@/components/categories";
import FeaturedRow from "@/components/featuredRow";
import { featured } from "@/constants";

export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">
            <Text className="text-center text-lg pb-5">Harmony House 🎶</Text>
            <StatusBar barStyle="dark-content" />
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder="Search" className="ml-1 flex-1" />
                    <View className="flex-row itmes-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.Archive height="20" width="20" stroke="gray" />
                    </View>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}
            >
                {/* Categories */}
                <Categories />


                {/* Features */}
                <View className="mt-5">
                    {
                        featured.map((item, index)=>{
                            return (
                                <FeaturedRow
                                    key={item}
                                    title={item.title}
                                    stores={item.stores}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>

        </SafeAreaView>
            
    )
}
