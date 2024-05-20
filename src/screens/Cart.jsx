import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../components/CartItem';
import { colors } from '../constants/colors';
import { FontAwesome5 } from "@expo/vector-icons"
import { useSelector } from 'react-redux';

const Cart = () => {
    const {items: CartData, total} = useSelector(state => state.cart.value)

    //const [triggerPostOrder, result] = usePostOrderMutation()
    
    return (
    <View style={styles.container}>
        <FlatList
            data={CartData}
            keyExtractor={data => data.id}
            renderItem={({item})=> {return (<CartItem cartItem={item}/>)}}
        />
        <View style={styles.totalContainer}>
            <Pressable>
                <View><FontAwesome5 name="check-circle" size={50} color={colors.gray200}/></View>
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
        flex: 1,
        marginBottom: 120,
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