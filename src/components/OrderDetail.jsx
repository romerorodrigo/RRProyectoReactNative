import React from 'react';
import { Modal, View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { colors } from '../constants/colors';
import CustomButton from './custom/customButton';

const OrderDetail = ({ visible, onClose, order }) => {
  if (!order) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
    >
        <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
                <Text style={styles.title}>Order Details</Text>
                <Text style={styles.subtitle}>Order Date: {new Date(order.createdAt).toLocaleString()}</Text>
                <Text style={styles.subtitle}>Total: ${order.total}</Text>
                <Text style={styles.subtitle}>Items:</Text>
                <ScrollView style={styles.scrollView}>
                {order.items.map((item) => (
                    <View key={item.id} style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Image source={{ uri: item.thumbnail }} style={styles.image} />
                    <Text style={styles.itemText}>Brand: {item.brand}</Text>
                    <Text style={styles.itemText}>Category: {item.category}</Text>
                    <Text style={styles.itemText}>Description: {item.description}</Text>
                    <Text style={styles.itemText}>Quantity: {item.quantity}</Text>
                    <Text style={styles.itemText}>Price: ${item.price}</Text>
                    <Text style={styles.itemText}>Total: ${item.price * item.quantity}</Text>
                    </View>
                ))}
                </ScrollView>
                <CustomButton
                    name={"window-close"}
                    size={40}
                    onConfirm={onClose}
                />
            </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    height: '70%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.gray900,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.gray100,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',    
    color: colors.gray200,
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    marginBottom: 10,
    borderColor: colors.gray200,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.allBlack,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.gray200,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 18,
    color: colors.gray200,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default OrderDetail;