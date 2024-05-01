import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import Card from './Card';

const CategoryItem = ({category, selectCategory = () => {} }) => {
  return (
    <Card style={styles.additionalStyleCard}>
        <Pressable onPress={()=>selectCategory(category)}>
          <Image 
            resizeMode='cover'
            style = {styles.image}
            source= {{ uri:category.image }}
          />
        </Pressable>
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
      borderRadius: 10
    },    
    text: {
        color: colors.gray100,
        textAlign: 'center',
        fontSize: 20
    }
})