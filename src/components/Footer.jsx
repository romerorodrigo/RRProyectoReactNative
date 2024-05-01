import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Footer = () => {
  return (
    <View style = {styles.container}>
      <Image
          resizeMode='cover'
          style = {styles.image_center}
          source={require('../../assets/LaFusaMedioCompleta.png')}
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
    width: '100%',
    borderRadius: 8
  }
})