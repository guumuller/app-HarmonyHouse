import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native"
import React from 'react'
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from 'react-native-feather'
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderProductScreen from "@/components/headerProductScreen";

export default function ProductScreen({}) {
    const { params } = useRoute();
    const navigation = useNavigation();
    let item = params;

    return (
        <SafeAreaView className="bg-gray-200 flex-1"> 
            {/* Fixed Header */}
            <HeaderProductScreen />

            {/* Scrollable content */}
            <ScrollView>
                <View className="items-center mt-12">
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="overflow-visible"
                    >  
                        <View className="aspect-auto" style={styles.image}>
                            <Image source={item.image} className="h-96 w-72 rounded-2xl" />
                        </View>
                    </ScrollView>
                </View>
                
                <View className="flex-row justify-between mt-5 px-5">
                    <Text className="font-bold text-lg">{item.name}</Text>
                    <Text className="font-bold text-xl">${item.price}</Text>
                </View>
                <View className="flex-row space-x-2 my-1 justify-between px-5 pb-3">
                    <Text>Products in stock: {item.stock}</Text>
                    <View className="flex-row items-center space-x-1">
                    <Image source={require('../assents/images/star.png')} className="h-4 w-4" />
                        <Text className="text-green-700">{item.stars}</Text>
                        <Text className="text-gray-700 text-xs">({item.reviews}reviews)</Text>
                    </View>
                </View>
                <Text className="px-5 text-xl">PRODUCT DETAILS</Text>

                <View className=" bottom-5 left-0 right-0 items-center flex-row justify-between px-10 mt-10">
                    <TouchableOpacity className="bg-blue-900 flex-row items-center py-3 px-7 rounded-full">
                        <Text className="text-white ml-2">Buy now</Text>
                        <Icon.ArrowRight color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: {
        
    }
})


// import React, { useState } from "react";
// import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });

// export default App;