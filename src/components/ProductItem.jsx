import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'
import Card from './Card'

const ProductItem = ({product}) => {
  return (
    <Card style={styles.styleCard}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.desc}>{product.description}</Text>
        </View>
        <Image 
            resizeMode='cover'
            style = {styles.image}
            source={{uri: product.images[0]}}
          />
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
    width: '50%',
    borderRadius: 8,
    alignItems: 'flex-end'
  },  
  textContainer: {
    alignItems: 'flex-start',
    width: '50%',
    flexWrap: 'np-wrap'
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
  }
})