import React from "react";
import Cart from "../screens/Cart";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from "react-redux";
import NavigatorAuthStack from "./NavigatorAuthStack";

const Stack = createNativeStackNavigator()

const CartStack = () => {
    const {user} = useSelector(state => state.auth.value)

    return (
        <Stack.Navigator initialRouteName="CartScreen" screenOptions={{headerShown: false}}>
        {
            user ? <Stack.Screen name="CartScreen" component={Cart} /> : <Stack.Screen name="AuthCart" component={NavigatorAuthStack} />
        }
        </Stack.Navigator>
    );
};

export default CartStack;