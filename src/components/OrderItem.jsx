import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colors";
import CustomButton from "./custom/customButton";
import OrderDetail from "./OrderDetail";

const OrderItem = ({ order }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const total = order.items.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
    );

    const handleViewOrder = () => {setModalVisible(true);};
    const handleCloseModal = () => {setModalVisible(false);};

    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {new Date(order?.createdAt || null).toLocaleString()}
                </Text>
                <Text style={styles.text2}>${total}</Text>
            </View>
            <CustomButton
                name={"search"}
                size={30}
                onConfirm={handleViewOrder}
            />
            <OrderDetail
                visible={modalVisible}
                onClose={handleCloseModal}
                order={order}
            />
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.allBlack,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.gray200,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        color: colors.gray200,
    },
    text2: {
        fontStyle: "italic",
        fontSize: 15,
        color: colors.gray200,
    },
    image: {
        height: 30,
        width: '35%',
        borderRadius: 8,
        alignItems: 'flex-end',
        maxHeight: 130,
      },  
});
