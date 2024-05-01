import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'
import Card from './Card'

const ProductItem = ({product}) => {
  return (
    <Card style={styles.additionalStylesCard}>
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
  image: {
    height: 130,
    width: 130,
    borderRadius: 8
  },
  additionalStylesCard: {
    paddingLeft: 10,
    flexDirection: 'row',
    height: 180,
    width: '90%',
    justifyContent: 'space-between',
    margin: 20,
    borderRadius: 20,
    padding: 20,
    borderWidth: 3,
    borderColor: colors.gray300,
  },
  textContainer: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  title: {
    color: colors.gray400,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    maxWidth: '100%'
  },
  desc: {
    color: colors.gray100,
    fontSize: 15,
    maxWidth: '70%'
  }
})