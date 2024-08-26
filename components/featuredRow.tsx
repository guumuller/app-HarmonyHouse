import { View, Text } from 'react-native';
import React from 'react'

export default function FeaturedRow({title, description, instruments}) {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">{description}</Text>
                </View>
            </View>
        </View>
    )
}