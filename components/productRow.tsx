import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import navigation from '@/app/navigation'
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ProductRow({item}) {
    const {params} = useRoute();
    
    const navigation = useNavigation();

    const smallDescription = item.description.length > 50 
    ? item.description.substring(0, 50) + '...' 
    : item.description;

    return (
        <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
            <Image className="rounded-3xl" style={{height: 100, width: 100}}
            source={item.image}
            />
            <View className="flex flex-1 space-y-3 relative">
                <TouchableOpacity>
                    <Icon.Heart className="absolute right-1  p-2 rounded-full shadow text-blue-900" />
                </TouchableOpacity>
                <View className="pl-3">
                    <Text className="text-xl">{item.name}</Text>
                    <Text className="text-gray-700">{smallDescription}</Text>
                </View>
                <View className="flex-row justify-between pl-3 items-center">
                    <Text className="text-gray-700 text-lg font-bold">
                        ${item.price}
                    </Text>
                    <View className="flex-row items-center">
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Product', {...item})}
                        className="p-1 rounded-full"
                        >
                            <Text>View details...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}