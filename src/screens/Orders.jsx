import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import OrderItem from '../components/OrderItem'
import { colors } from '../constants/colors'
import { useGetOrdersQuery } from '../services/shopService'
import { useSelector } from 'react-redux'

const Orders = () => {

  const {localId} = useSelector(state => state.auth.value)    
  const {data: orders, isSuccess} = useGetOrdersQuery(localId)
  const [ordersFiltered, setOrdersFiltered] = useState()

  useEffect(()=> {
    if (isSuccess) {
      const responseTransformed = Object.values(orders)
      const ordersFiltered = responseTransformed.filter(order => order.user === localId)
      setOrdersFiltered(ordersFiltered)
    }
  }, [orders, isSuccess, localId])

  return (
    <View style={styles.container}>
        <FlatList
            data={ordersFiltered}
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