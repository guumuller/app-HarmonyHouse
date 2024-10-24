import { View, TouchableOpacity, ImageBackground, Text } from "react-native";
import React, { useContext, useState } from 'react';
import * as Icon from 'react-native-feather';
import { useRoute, useNavigation } from "@react-navigation/native";
import { CartContext } from '../components/cartContext';

export default function HeaderProductScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();
    const [isHeartRed, setIsHeartRed] = useState(false);  // controla a cor do ícone coração
    const { addToCart } = useContext(CartContext); // usar o contexto
    let item = params;

    const handleHeartPress = () => {
        setIsHeartRed(!isHeartRed);  // alterna entre vermelho e cor original (azul)
    };

    const handleAddToCart = () => {
        addToCart(item); // adicionar item ao carrinho
    };

    return (
        <View className="relative">
            <ImageBackground
                source={item.image}
                className="-mt-16"  
                style={{
                    resizeMode: 'cover', 
                    zIndex: -1,
                    width: '100%',
                    height: 500,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50, 
                    overflow: 'hidden',
                }}
            />
            <View className="absolute top-0 left-0 right-0 z-10 flex-row justify-between items-center p-5 -mt-16">         
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="bg-gray-50 p-2 rounded-full shadow"
                >
                    <Icon.ArrowLeft strokeWidth={3} className="text-blue-900"  />
                </TouchableOpacity>
                <View className="flex-row">
                    <TouchableOpacity
                        className="bg-gray-50 p-2 rounded-full shadow flex-row items-center"
                        onPress={handleAddToCart}
                    >
                        <Icon.ShoppingCart className="text-blue-900 mr-2"  />
                        <Text>
                            Add to cart
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-gray-50 p-2 rounded-full shadow ml-5"
                        onPress={handleHeartPress}
                    >
                        <Icon.Heart className="text-blue-900"  
                            fill={isHeartRed ? 'red' : 'none'}
                            stroke={isHeartRed ? 'red' : "#1e3a8a"}
                        />
                    </TouchableOpacity>
                </View>             
            </View>
        </View>
    );
}
