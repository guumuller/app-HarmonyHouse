import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import React from 'react'
import HomeScreen from '@/screens/HomeScreen';
import StoreScreen from '@/screens/StoreScreen';
import ProductScreen from '@/screens/ProductSreen';

export default function Navigation() {
    return (
        
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Harmony House" component={HomeScreen} />
            <Stack.Screen name="Store" component={StoreScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            
        </Stack.Navigator>
        
        
    )
}
