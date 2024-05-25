import React from "react"
import Profile from "../screens/Profile"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useSelector } from "react-redux"
import NavigatorAuthStack from "./NavigatorAuthStack"
import { StyleSheet } from "react-native"
import ImageSelector from "../screens/ImageSelector"

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
    const {user} = useSelector(state => state.auth.value)

    return (
        <Stack.Navigator initialRouteName="ProfileScreen" screenOptions={{headerShown: false,}}>
            {
                user ?  
                <>
                    <Stack.Screen name="ProfileScreen" component={Profile} />
                    <Stack.Screen name="ImageSelectorScreen" component={ImageSelector} />
                </>
                : 
                    <Stack.Screen name="AuthProfile" component={NavigatorAuthStack} />
            }
        </Stack.Navigator>
    )
}

export default ProfileStack

const styles = StyleSheet.create({})
