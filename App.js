import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Home from './src/screens/Home';
import Footer from './src/components/Footer';
import { colors } from './src/constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={"**_LA_FUSA_INSTRUMENTOS_**"}/>
      <Home />
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
