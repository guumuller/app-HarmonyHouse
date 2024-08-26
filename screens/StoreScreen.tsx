import { View, Text } from "react-native"
import React from 'react'
import { useRoute } from "@react-navigation/native";

export default function StoreScreen() {
    const {params} = useRoute();
    let item = params;
    
    return (
        <View>
            <Text>StoreScreen</Text>
        </View>
    )
}