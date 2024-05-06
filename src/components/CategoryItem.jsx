import { Image, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import Card from './Card';

const CategoryItem = ({ category, navigation }) => {

  return (
    <Card style={styles.additionalStyleCard}>
        <Pressable 
          onPress={() => {
              navigation.navigate('ItemListCategory',{category})
          }}
        >
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
    height: 160,
    width: 160,
    borderRadius: 8,
  },    
  additionalStyleCard: {
    flexDirection: 'row',
    height: 160,
    width: '45%',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10
  },    
  text: {
      color: colors.gray100,
      textAlign: 'center',
      fontSize: 20
  }
})