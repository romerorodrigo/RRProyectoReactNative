import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { Entypo } from "@expo/vector-icons";

const CartItem = ({ cartItem }) => {
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                <Text style={styles.text2}>{cartItem.brand}</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
            <Entypo name="trash" size={30} color="black" />
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.gray200,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
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
        color: colors.allBlack,
    },
    text2: {
        fontStyle: "italic",
        fontSize: 15,
        color: colors.allBlack,
    },
});
