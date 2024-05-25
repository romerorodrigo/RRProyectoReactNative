import { StyleSheet, View, Image } from 'react-native'
import { colors } from '../constants/colors'
import { useSelector } from 'react-redux'

const Header = (route) => {
  const categorySelected = useSelector(state => state.shop.value.categorySelected)
  return (
    <View style = {styles.container}>
      <Image
          resizeMode='center'
          style = {styles.main_image}
          source= {require('../../assets/LaFusaMedio.png')}
        />
      <Image
          resizeMode='cover'
          style = {styles.image}
          source={categorySelected ? { uri:categorySelected['imageHeader']} : require('../../assets/LafusaTexto.png')}
        />
      </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: colors.gray900,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image: {
    height: 70,
    width: '20%',
    borderRadius: 8
  },    
  main_image: {
    height: 70,
    width: '50%',
    borderRadius: 8
  }
})