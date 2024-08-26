import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import React from 'react'
import HomeScreen from '@/screens/HomeScreen';
import RestaurantScreen from '@/screens/InstrumentScreen';
import InstrumentScreen from '@/screens/InstrumentScreen';

export default function Navigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Harmony House" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={InstrumentScreen} />
        </Stack.Navigator>
    )
}
