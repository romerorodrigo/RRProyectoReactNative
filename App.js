import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { colors } from './src/constants/colors';
import Navigator from './src/navigation/Navigator';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Navigator/>
      </SafeAreaView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,    
    flex: 1,
    backgroundColor: colors.allBlack,
  },
});