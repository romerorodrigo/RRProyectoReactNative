import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Footer = ({text}) => {
  return (
    <View style = {styles.container}>
      <Image
          resizeMode='cover'
          style = {styles.image_center}
          source={require('../../assets/LaFusaMedio.png')}
        />
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: colors.allBlack,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image_center: {
    height: 70,
    width: 300,
    borderRadius: 8
  },      
  text: {
    color: colors.gray100
  }
})