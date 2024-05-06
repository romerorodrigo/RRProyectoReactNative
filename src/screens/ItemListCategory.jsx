import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
import products from "../data/products.json"
import ProductItem from "../components/ProductItem"
import Search from "../components/Search"
import { useState, useEffect } from "react"

const ItemListCategory = ({setCategorySelected = ()=> {},
                          navigation,
                          route}) => {
  const [keyWord, setKeyword] = useState("")
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")
  const {category} = route.params

  useEffect(()=> {
    regex= /\d/
    const hasDigits = (regex.test(keyWord))
    if (hasDigits) {
      setError("Don't use digits")
      return
    }
    const productsPrefiltered = products.filter(product => product.category === category.category)
    const productsFilter = productsPrefiltered.filter(product => product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()))

    setProductsFiltered(productsFilter)
    setError("")
  }, [keyWord, category])

  return (
    <View style={styles.flatListContainer}>
      <Search error = {error} onSearch={setKeyword} goBack={()=> navigation.goBack()}/>
      <FlatList
        data = {productsFiltered}
        renderItem = {({item})=> <ProductItem product={item} navigation={navigation}/>}
        keyExtractor = {(producto) => producto.id}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    backgroundColor: colors.allBlack,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
})