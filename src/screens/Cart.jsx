import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../components/CartItem';
import { colors } from '../constants/colors';
import { FontAwesome5 } from "@expo/vector-icons"
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';
import { useNavigation } from '@react-navigation/native';

const Cart = ( route, navigation) => {
    const {items: CartData, total} = useSelector(state => state.cart.value)
    const [triggerPostOrder, result] = usePostOrderMutation()
    const {user} = useSelector(state => state.auth.value)
    const [isPressedConfirm, setIsPressedConfirm] = useState(false);
    const onNavigate = useNavigation();

    const onConfirmOrder = () => {
        !user ? 
                onNavigate.navigate('Auth')
              : 
                triggerPostOrder({items: CartData, user: user, total})
    }
    return (
    <View style={styles.container}>
        <FlatList
            data={CartData}
            keyExtractor={data => data.id}
            renderItem={({item})=> {return (<CartItem cartItem={item}/>)}}
        />
        <View style={styles.totalContainer}>
            <Pressable onPress={onConfirmOrder} onPressIn={() => setIsPressedConfirm(true)} onPressOut={() => setIsPressedConfirm(false)}>
                <View><FontAwesome5 name="check-circle" size={40} color={isPressedConfirm ? colors.gray800 : colors.gray100}/></View>
            </Pressable>
            <Text style={styles.textTotal}>Total: ${total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray600,
        justifyContent: 'space-between',
        flex: 1
    },
    totalContainer: {
        fontSize: 20,
        color: colors.gray100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textTotal: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.gray100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})