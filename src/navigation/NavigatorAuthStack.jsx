import { StyleSheet } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Login from "../screens/Auth/Login"
import Signup from "../screens/Auth/Signup"

const Stack = createNativeStackNavigator()

const NavigatorAuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen component={Login} name="Login" />
            <Stack.Screen
                component={Signup}
                name="Signup"
            />
        </Stack.Navigator>
    )
}

export default NavigatorAuthStack

const styles = StyleSheet.create({})