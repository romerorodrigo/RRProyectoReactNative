import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import OrderData from '../data/orders.json'
import OrderItem from '../components/OrderItem'
import { colors } from '../constants/colors'

const Orders = () => {
  return (
    <View style={styles.container}>
        <FlatList
            data={OrderData}
            keyExtractor={orderItem => orderItem.id}
            renderItem={({item}) => {
                return (
                    <OrderItem 
                      order={item}
                    />
                )
            }}
        />
    </View>
  )
}

export default Orders

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