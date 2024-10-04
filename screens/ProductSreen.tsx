import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Modal, Pressable, VirtualizedList } from "react-native"
import React, { useState } from 'react'
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from 'react-native-feather'
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderProductScreen from "@/components/headerProductScreen";
import ProductCarousel from "@/components/productCarousel";
import ProductInformations from "@/components/productInformations";

export default function ProductScreen({}) {
    const { params } = useRoute();
    const navigation = useNavigation();
    let item = params;

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView className="bg-gray-200 flex-1"> 
            {/* Fixed Header */}
            <HeaderProductScreen />

            {/* Scrollable content */}
            <ScrollView>
                <View className="items-center">

                    {/* Carousel */}
                    <ProductCarousel />

                </View>

                {/* Informations */}    
                <ProductInformations />
            </ScrollView>
                <View className="absolute bottom-0 left-0 right-0 items-center pb-5">
                    <TouchableOpacity className="bg-blue-900 flex-row items-center py-3 px-5 rounded-full" onPress={() => setModalVisible(true)}>
                        <Text className="text-white">Buy now</Text>
                        <Icon.ChevronUp className="text-white" />
                    </TouchableOpacity>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View className="flex-1 justify-center items-center bg-black/50">
                        <View className="bg-white w-4/5 p-5 rounded-2xl">
                            <Text className="font-bold text-lg mb-4">Make Payment:</Text>
                            <Text>Product: {item.name}</Text>
                            <View className="items-center mt-2">
                                <Image className="rounded-3xl" style={{height: 350, width: 300}}
                                    source={item.image}
                                />
                                <Text>${item.price}</Text>
                            </View>
                            
                            {/* Payment button */}
                            <TouchableOpacity
                                className="mt-5 bg-green-700 py-2 px-4 rounded-lg"
                            >
                                <Text className="text-white text-center">Confirm Payment</Text>
                            </TouchableOpacity>

                            {/* Close button */}
                            <TouchableOpacity
                                className="mt-5 bg-red-500 py-2 px-4 rounded-lg"
                                onPress={() => setModalVisible(false)}
                            >
                                <Text className="text-white text-center">Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
        </SafeAreaView>
    );
}
