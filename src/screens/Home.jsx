import { FlatList, StyleSheet, View } from "react-native"
import { colors } from "../constants/colors"
import CategoryItem from "../components/CategoryItem"
import { useGetCategoriesQuery } from "../services/shopService"

const Home = ({route, navigation}) => {
    const {data: categories, error, isLoading} = useGetCategoriesQuery()
    return (
      <View style={styles.flatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor = {(item) => item.id}
          data = {categories}
          renderItem = {({item}) => (<CategoryItem navigation={navigation} category={item}/>)}
          numColumns={2}
          />
      </View>
    )
  }
  
  export default Home

const styles = StyleSheet.create({
    flatListContainer: {
      paddingTop: 10,
      width: '100%',
      backgroundColor: colors.gray600,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10
    },
  })