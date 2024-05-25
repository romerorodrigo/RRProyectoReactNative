import React, { useEffect, useState } from "react"
import Profile from "../screens/Profile"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useDispatch, useSelector } from "react-redux"
import NavigatorAuthStack from "./NavigatorAuthStack"
import ImageSelector from "../screens/ImageSelector"
import { getSession } from "../persistence"
import { setUser } from "../features/userSlice"

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
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
            setMessage(error.message)
          }
        })()
      }, [])

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
