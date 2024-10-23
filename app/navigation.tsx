import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import React from 'react'
import HomeScreen from '@/screens/HomeScreen';
import StoreScreen from '@/screens/StoreScreen';
import ProductScreen from '@/screens/ProductSreen';
import CartScreen from '@/screens/CartScreen';
import LoginScreen from '@/screens/LoginScreen';
import GetStartedScreen from '@/screens/GetStartedScreen';
import SignUpScreen from '@/screens/SignUpScreen';
import WelcomeScreen from '@/screens/WelcomeScreen';

export default function Navigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Started" component={GetStartedScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Harmony House" component={HomeScreen} />
            <Stack.Screen name="Store" component={StoreScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>     
    )
}
