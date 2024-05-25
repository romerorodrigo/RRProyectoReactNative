import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../components/CartItem';
import { colors } from '../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';
import CustomButton from '../components/custom/customButton';
import { clearCart } from '../features/cartSlice';
import CustomAlert from '../components/custom/CustomAlert';

const Cart = () => {
    const {localId} = useSelector(state => state.auth.value)
    const {items: CartData, total} = useSelector(state => state.cart.value)
    const [triggerPostOrder, result] = usePostOrderMutation()
    const dispatch = useDispatch()
    const [showAlert, setShowAlert] = useState(false);

    const handleCloseAlert = () => {
      setShowAlert(false);
    };

    const onConfirmOrder = () => {
        const createdAt = new Date().toISOString()
        const order = triggerPostOrder({items: CartData, user: localId, total, createdAt})
        dispatch(clearCart())
        setShowAlert(true)
    }

    return (
    total ? 
    <View style={styles.container}>
        <FlatList
            data={CartData}
            keyExtractor={data => data.id}
            renderItem={({item})=> {return (<CartItem cartItem={item}/>)}}
        />
        <View style={styles.totalContainer}>
            <CustomButton
                name={"check-circle"}
                size={40}
                onConfirm={onConfirmOrder}
            />
            <Text style={styles.textTotal}>Total: ${total}</Text>
        </View>
    </View>
    :
    <View style={styles.container}>
        {showAlert && 
            (
            <CustomAlert
                message="Order successfully generated. Thank you for your purchase. You can view your order in the purchase orders list."
                onClose={handleCloseAlert}
            />
        )}
        <View style={styles.textEmptyContainer}>
            <Text style={styles.textEmptyCart}>Cart is empty</Text>
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
    textEmptyContainer: {
        fontSize: 20,
        color: colors.gray100,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'stretch',
        alignItems: 'center',
    },
    textTotal: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.gray100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textEmptyCart: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.gray100,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }
})