import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
import CategoryItem from "../components/CategoryItem"
import categories from "../data/categories.json"

const Home = () => {
    return (
      <View style={styles.flatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor = {itemArray => itemArray}
          data = {categories.sort()}
          renderItem = {({item}) => <CategoryItem category={item}/>}
          numColumns={2}
          />
      </View>
    )
  }
  
  export default Home

const styles = StyleSheet.create({
    flatListContainer: {
      paddingTop: 20,
      width: '100%',
      backgroundColor: colors.allBlack,
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10
    },
  })