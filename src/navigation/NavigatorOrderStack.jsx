import React from "react"
import OrderScreen from "../screens/Orders"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useSelector } from "react-redux"
import NavigatorAuthStack from "./NavigatorAuthStack"

const Stack = createNativeStackNavigator()

const OrderStack = () => {
    const {user} = useSelector(state => state.auth.value)

    return (
        <Stack.Navigator initialRouteName="OrderScreen" screenOptions={{headerShown: false,}}>
            {
                user ?  <Stack.Screen name="OrderScreen" component={OrderScreen} /> : <Stack.Screen name="Auth" component={NavigatorAuthStack} />
            }
        </Stack.Navigator>
    )
}

export default OrderStack