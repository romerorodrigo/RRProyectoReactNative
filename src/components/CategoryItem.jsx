import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import Card from './Card';

const CategoryItem = ({category}) => {
  return (
    <Card style={styles.additionalStyleCard}>
        <Image 
          resizeMode='cover'
          style = {styles.image}
          source= {{ uri:category.image }}
          //source={require('../../assets/CategoryGuitar.png')}
        />
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    image: {
      height: 264,
      width: 264,
      borderRadius: 8
    },    
    additionalStyleCard: {
      flexDirection: 'row',
      height: 264,
      width: 264,
      justifyContent: 'space-between',
      margin: 10,
    },    
    text: {
        color: colors.gray100,
        textAlign: 'center',
        fontSize: 20
    }
})