import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/userSlice";
import { colors } from "../constants/colors";
import { usePostProfileImageMutation } from "../services/shopService";
import AddButton from "../components/custom/AddButton";
import * as ImagePicker from "expo-image-picker";

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [triggerPostImage, result] = usePostProfileImageMutation()
    const {localId} = useSelector(state => state.auth.value)
    const dispatch = useDispatch()
    
    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        return granted
    }

    const pickImage = async () => {
        try {
            const isCameraOK = await verifyCameraPermissions()
            
            if (isCameraOK) {
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [9, 16],
                    base64: true,
                    quality: 0.2    
                })
                if (!result.canceled){
                    setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
                }
            }
        } catch (error) {
            alert(error);
        }
    };
    
    const confirmImage = async () => {
        try {
            dispatch(setCameraImage(image))
            triggerPostImage({image, localId})
            if(navigation.canGoBack()){
                navigation.goBack()
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <AddButton title="Take another photo" onPress={pickImage} />
                    <AddButton title="Confirm photo" onPress={confirmImage} />
                </>
            ) : (
                <>
                    <View style={styles.noPhotoContainer}>
                        <Text>No photo to show...</Text>
                    </View>
                    <AddButton title="Take a photo" onPress={pickImage} />
                </>
            )}
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        backgroundColor: colors.gray600,
        color: colors.gray200
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.allBlack,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold"
    },
});
