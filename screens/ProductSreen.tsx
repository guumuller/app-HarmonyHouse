import { View, Text, ScrollView, TouchableOpacity, Image, Modal, TextInput, GestureResponderEvent, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState, useContext } from 'react';
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from 'react-native-feather';
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderProductScreen from "@/components/headerProductScreen";
import ProductInformations from "@/components/productInformations";
import { CartContext } from "@/components/cartContext";
import QRCode from 'react-native-qrcode-svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function ProductScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();
    const item = params;

    //adicionar ao carrinho
    const { addToCart } = useContext(CartContext);

    //subir modal
    const [modalVisible, setModalVisible] = useState(false);

    //pagamento
    const [paymentMethod, setPaymentMethod] = useState(null);

    // cartão de crédito
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    // function handlePayment(event: GestureResponderEvent): void {
    //     throw new Error("Function not implemented.");
    // }

    return (
        <SafeAreaView className="bg-gray-200 flex-1"> 
            <HeaderProductScreen />
            <ScrollView>
                <View className="items-center">
                    <ProductInformations />
                </View>
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
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    enableOnAndroid={true}
                    extraScrollHeight={Platform.OS === 'ios' ? 0 : 100}
                >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View className="flex-1 justify-center items-center bg-black/50">
                            <View className="bg-white w-5/6 p-5 rounded-2xl">
                                <TouchableOpacity
                                        className="absolute right-0 top-0 border-solid border-blue-900"
                                        onPress={() => setModalVisible(false)}
                                    >
                                    <View className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center -mr-3 -mt-4">
                                        <Text className="text-white font-bold text-xs">X</Text>
                                    </View>
                                </TouchableOpacity>
                                <View className="flex-row justify-between items-center">
                                    <Text className="font-bold text-xl">{item.name}</Text>
                                    <Text className="font-bold">${item.price}</Text>
                                </View>
                                <View className="items-center mt-2">
                                    <Image className="rounded-3xl" style={{ height: 350, width: 300 }}
                                        source={item.image}
                                    />
                                </View>
                                <View className="items-center">
                                    <Text className="mt-5 mb-5 font-medium">Choose your payment method:</Text>
                                    <View className="flex-row gap-4 items-center">
                                        <TouchableOpacity onPress={() => setPaymentMethod('credit')}>
                                            <Icon.CreditCard className="text-blue-900" />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => setPaymentMethod('pix')}>
                                            <Image style={{height: 25, width: 25}} source={require('../assets/images/icons/pix.png')} />
                                        </TouchableOpacity>
                                    </View>
                                    {paymentMethod === 'credit' && (
                                        <View className="w-full mt-5">
                                            <TextInput
                                                placeholder="Card Number"
                                                value={cardNumber}
                                                onChangeText={setCardNumber}
                                                keyboardType="numeric"
                                                className="border border-gray-400 p-3 rounded-md mb-3"
                                            />
                                            <TextInput
                                                placeholder="Card Holder Name"
                                                value={cardHolderName}
                                                onChangeText={setCardHolderName}
                                                className="border border-gray-400 p-3 rounded-md mb-3"
                                            />
                                            <View className="flex-row justify-between">
                                                <TextInput
                                                    placeholder="Expiry Date (MM/YY)"
                                                    value={expiryDate}
                                                    onChangeText={setExpiryDate}
                                                    keyboardType="numeric"
                                                    className="border border-gray-400 p-3 rounded-md mb-3 w-2/2 mr-2"
                                                />
                                                <TextInput
                                                    placeholder="CVV"
                                                    value={cvv}
                                                    onChangeText={setCvv}
                                                    keyboardType="numeric"
                                                    secureTextEntry={true}
                                                    className="border border-gray-400 p-3 rounded-md mb-3 w-1/3"
                                                />
                                            </View>
                                            <TouchableOpacity
                                                // onPress={handlePayment}
                                                className="bg-green-500 py-3 rounded-md mt-4"
                                            >
                                                <Text className="text-white text-center">Submit Payment</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                    {paymentMethod === 'pix' && (
                                        <View className="items-center mt-3">
                                            <QRCode
                                                value="04342575086" // Aqui vai o código Pix gerado
                                                size={100}
                                            />
                                        </View>
                                    )}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAwareScrollView>
            </Modal>
        </SafeAreaView>
    );
}
