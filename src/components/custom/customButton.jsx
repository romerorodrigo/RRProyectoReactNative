import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { colors } from '../../constants/colors';
import { FontAwesome5 } from "@expo/vector-icons"

const CustomButton = ({name, size, onConfirm}) => {
    const [isPressedConfirm, setIsPressedConfirm] = useState(false);

    return (
        <Pressable onPress={onConfirm} onPressIn={() => setIsPressedConfirm(true)} onPressOut={() => setIsPressedConfirm(false)}>
            <View><FontAwesome5 name={name} size={size} color={isPressedConfirm ? colors.gray800 : colors.gray100}/></View>
        </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({})