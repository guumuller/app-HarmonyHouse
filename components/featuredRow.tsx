import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
import StoreCard from './storeCard';

export default function FeaturedRow({title, description, stores}) {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-blue-900 font-semibold">See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="overflow-visible py-5"
            >
                {
                    stores.map((stores, index)=>{
                        return (
                            <StoreCard
                                item={stores}
                                key={index}
                            >
                            </StoreCard>
                                
                            
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}