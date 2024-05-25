import React, { useEffect, useState } from "react";
import Cart from "../screens/Cart";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useDispatch, useSelector } from "react-redux";
import NavigatorAuthStack from "./NavigatorAuthStack";
import { getSession } from "../persistence";
import { setUser } from "../features/userSlice";

const Stack = createNativeStackNavigator()

const CartStack = () => {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth.value)
    const [message, setMessage] = useState()
    
    useEffect(()=> {
      if(message)
        alert(message)
    }, [message])

    useEffect(()=> {
        (async ()=> {
          try {
            const response = await getSession()
            if (response.rows._array.length) {
              const user = response.rows._array[0]
              dispatch(setUser({
                email: user.email,
                localId: user.localId,
                idToken: user.idToken
              }))
            }
          } catch (error) {
            setMessage(error.message);
          }
        })()
      }, [])

    return (
        <Stack.Navigator initialRouteName="CartScreen" screenOptions={{headerShown: false}}>
        {
            user ? <Stack.Screen name="CartScreen" component={Cart} /> : <Stack.Screen name="AuthCart" component={NavigatorAuthStack} />
        }
        </Stack.Navigator>
    );
};

export default CartStack;