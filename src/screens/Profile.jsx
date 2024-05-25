import { Image, StyleSheet, View } from "react-native";
import React from "react";
import AddButton from "../components/custom/AddButton"
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopService";
import { colors } from "../constants/colors";

const Profile = ({navigation}) => {
    const {imageCamera, localId} = useSelector(state => state.auth.value)
    const {data: imageFromBase} = useGetProfileImageQuery(localId)

    const launchCamera = async () => {
        navigation.navigate('ImageSelectorScreen')
    };

    return (
        <View style={styles.container}>
            {imageFromBase || imageCamera  ? (
                <Image
                    source={{uri: imageFromBase?.image || imageCamera}}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require("../../assets/defaultProfile.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <AddButton onPress={launchCamera} style={styles.profileButton} title="Add profile photo" />
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.gray600
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileButton:{
        backgroundColor: colors.allBlack,
        color: colors.gray200
    },
});
