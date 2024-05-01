import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
import CategoryItem from "../components/CategoryItem"
import categories from "../data/categories.json"

const Home = ({setCategorySelected}) => {
    return (
      <View style={styles.flatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor = {(item) => item.id}
          data = {categories.sort()}
          renderItem = {({item}) => (<CategoryItem category={item} selectCategory={setCategorySelected}/>)}
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