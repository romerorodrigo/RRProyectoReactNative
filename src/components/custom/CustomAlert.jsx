import { View, Text, Button, StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import CustomButton from './customButton';

const CustomAlert = ({ message, onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <CustomButton
        name={"window-close"}
        size={40}
        onConfirm={onClose}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    width: '100%',
    height: '40%',
    backgroundColor: colors.allBlack,
    padding: 20,
    borderColor: colors.gray200,
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: colors.gray200,
    fontSize: 22,
    marginBottom: 10,
  },
});

export default CustomAlert;