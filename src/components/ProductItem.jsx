import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'
import Card from './Card'
import { useDispatch } from "react-redux"
import { setIdSelected } from "../features/shopSlice"

const ProductItem = ({product, setProductSelected = () => {}, navigation}) => {
const dispatch = useDispatch()
const onNavigate = () => {
                              dispatch(setIdSelected(product.title))
                              navigation.navigate('ItemDetail', {productId: product.id})
}
  
  return (
    <Card style={styles.styleCard}>
      <Pressable style={styles.pressable} onPress ={onNavigate}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.desc}>{product.description}</Text>
        </View>
        <Image 
          resizeMode='cover'
          style = {styles.image}
          source={{uri: product.images[0]}}
        />
      </Pressable>        
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  styleCard: {
    flexDirection: 'row',
    height: 180,
    width: '95%',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 20,
    borderWidth: 3,
    borderColor: colors.gray300,
  },
  image: {
    height: 130,
    width: '35%',
    borderRadius: 8,
    alignItems: 'flex-end',
    maxHeight: 130,
  },  
  textContainer: {
    alignItems: 'flex-start',
    width: '65%',
    flexWrap: 'no-wrap'
  },
  title: {
    color: colors.gray400,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    width: '90%',
  },
  desc: {
    color: colors.gray100,
    fontSize: 15,
    width: '90%',    
    maxHeight: 90,
  },
  pressable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
  },
})