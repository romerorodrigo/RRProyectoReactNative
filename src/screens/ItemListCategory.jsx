import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
import ProductItem from "../components/ProductItem"
import Search from "../components/Search"
import { useState, useEffect } from "react"
import { useGetProductsByCategoryQuery } from "../services/shopService"

const ItemListCategory = ({setCategorySelected = ()=> {},
                          navigation,
                          route}) => {
  const [keyWord, setKeyword] = useState("")
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")
  const {category:categorySelected} = route.params
  const {data: prodFetch, error: errFetch, isLoading} = useGetProductsByCategoryQuery(categorySelected)
  
  useEffect(()=> {
    if (!isLoading) {
      const productsFilter = prodFetch.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
      )
      setProductsFiltered(productsFilter)
      setError("")
    }
  }, [keyWord, categorySelected, prodFetch, isLoading])

  return (
    <View style={styles.flatListContainer}>
      <Search error = {error} onSearch={setKeyword} goBack={()=> navigation.goBack()}/>
      <FlatList
        data = {productsFiltered}
        renderItem = {({item})=> <ProductItem product={item} navigation={navigation}/>}
        keyExtractor = {(product) => product.id}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    backgroundColor: colors.gray600,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
})