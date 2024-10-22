import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { CartContext } from '../components/cartContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderCartScreen from '@/components/headerCartScreen';

export default function CartScreen() {
    const { cartItems, removeFromCart } = useContext(CartContext); // usar o contexto e função para remover item

    return (
        <SafeAreaView>
            <HeaderCartScreen />
            <ScrollView className="h-full">
                {cartItems.length === 0 ? (
                    <View style={{ top: '100%', left: '25%' }}>
                        <>
                            <Text className="text-gray-700">Seu carrinho está vazio.</Text>
                            <Image
                                className="mt-4"
                                style={{ height: 180, width: 180 }}
                                source={require('../assents/images/carrinho.png')}
                            />
                        </>
                    </View>
                ) : (
                    cartItems.map((item, index) => (
                        <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-4 mt-5" key={index}>
                            <Image className="rounded-3xl" style={{ height: 100, width: 100 }} source={item.image} />
                            <Text className="ml-2">{item.name} - ${item.price}</Text>
                            <TouchableOpacity
                                className="absolute right-0 top-0"
                                onPress={() => removeFromCart(index)} // Remover o item ao clicar
                            >
                                <View className="bg-red-500 rounded-full w-5 h-5 flex items-center justify-center -mr-1 -mt-1">
                                    <Text className="text-white text-xs">X</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
