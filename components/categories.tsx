import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import React, { useState } from 'react'
import { categories } from "@/constants/index"

export default function Categories() {
    const [activateCategory, setActivateCategory] = useState(null);

    return (
        <View className="mt-4">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
            >
                {
                    categories.map((category, index)=>{
                        let isActive = category.id == activateCategory;
                        let btnClass = isActive? ' bg-blue-900 ' : ' bg-slate-600 ';
                        let textClass = isActive? ' font-semibold' : ' text-white ';
                        return (
                            <View key={index} className="flex justify-center items-center mr-6">
                                <TouchableOpacity 
                                onPress={()=> setActivateCategory(category.id)}
                                className={"p-4 rounded-full shadow bg-slate-600" + btnClass}
                                >
                                    <Text className={"text-white" + textClass}>{category.name}</Text>
                                </TouchableOpacity>

                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}