import { StyleSheet, View } from 'react-native';
import { colors } from './src/constants/colors';
import { useState } from "react"
import Header from './src/components/Header';
import Home from './src/screens/Home';
import Footer from './src/components/Footer';
import ItemListCategory from './src/screens/ItemListCategory';

export default function App() {

  const [categorySelected, setCategorySelected] = useState("")

  return (
    <View style={styles.container}>
      <Header/>
      {!categorySelected ? (
        <Home setCategorySelected={setCategorySelected} />
        ) : (
        <ItemListCategory categorySelected={categorySelected} setCategorySelected ={setCategorySelected}/>
      )}
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: colors.allBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
