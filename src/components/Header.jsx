import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Header = () => {
  return (
    <View style = {styles.container}>
      <Image
          resizeMode='cover'
          style = {styles.image}
          source={require('../../assets/LaFusa.png')}
      />
      <Image
          resizeMode='center'
          style = {styles.image_center}
          source={require('../../assets/LaFusaMedio.png')}
        />
      <Image
          resizeMode='cover'
          style = {styles.image}
          source={require('../../assets/LafusaTexto.png')}
        />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    backgroundColor: colors.gray900,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 8
  },    
  image_center: {
    height: 70,
    width: 450,
    borderRadius: 8
  }
})