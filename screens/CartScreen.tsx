import React from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderCartScreen from "@/components/headerCartScreen";

export default function CartScreen() {
    const {params} = useRoute();
    const navigation = useNavigation();
    let item = params;
    
    return(
        <SafeAreaView>
            <HeaderCartScreen />
        </SafeAreaView>
    );
}