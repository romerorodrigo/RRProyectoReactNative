import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { colors } from './src/constants/colors';
import { useState } from "react"
import Header from './src/components/Header';
import Home from './src/screens/Home';
import ItemListCategory from './src/screens/ItemListCategory';
import Footer from './src/components/Footer';
import ItemDetail from './src/screens/ItemDetail';


export default function App() {

  const [categorySelected, setCategorySelected] = useState("")
  const [itemIdSelected, setItemIdSelected] = useState("")

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Header/>
        {!categorySelected ? (
          <Home setCategorySelected={setCategorySelected} />
          ) 
          : 
            (!itemIdSelected ? 
              (<ItemListCategory 
                categorySelected={categorySelected} 
                setCategorySelected ={setCategorySelected} 
                setItemIdSelected={setItemIdSelected}/>)
            :
              (<ItemDetail idSelected={itemIdSelected} setProductSelected={setItemIdSelected}/>)
          )}
      </SafeAreaView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,    
    flex: 1,
    backgroundColor: colors.allBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
});