import React from "react"
import Orders from "../screens/Orders"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useSelector } from "react-redux"
import NavigatorAuthStack from "./NavigatorAuthStack"

const Stack = createNativeStackNavigator()

const OrderStack = () => {
    const {user} = useSelector(state => state.auth.value)

    return (
        <Stack.Navigator initialRouteName="OrdersScreen" screenOptions={{headerShown: false,}}>
            {
                user ?  <Stack.Screen name="OrdersScreen" component={Orders} /> : <Stack.Screen name="AuthOrders" component={NavigatorAuthStack} />
            }
        </Stack.Navigator>
    )
}

export default OrderStack