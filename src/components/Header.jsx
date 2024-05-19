import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../constants/colors'
import { useSelector } from 'react-redux'

const Header = ({route}) => {
  const categorySelected = useSelector(state => state.shop.value.categorySelected)
  console.log(route.name)
  console.log(categorySelected)
  return (
    <View style = {styles.container}>
      <Image
          resizeMode='center'
          style = {styles.image_center}
          source={categorySelected ? { uri:categorySelected['imageHeader']} : require('../../assets/LaFusaMedio.png')}
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image: {
    height: 70,
    width: '20%',
    borderRadius: 8
  },    
  image_center: {
    height: 70,
    width: '50%',
    borderRadius: 8
  }
})