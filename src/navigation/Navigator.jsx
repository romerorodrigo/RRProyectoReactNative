import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'
import ItemListCategory from '../screens/ItemListCategory'
import ItemDetail from '../screens/ItemDetail'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName='Home'
        screenOptions = {
            ({}) => (
                {
                    header: () => {
                        return <Header/>
                    }
                }
            )
        }
        >
            <Stack.Screen
                component={Home}
                name='Home'
            />
            <Stack.Screen
                component={ItemListCategory}
                name='ItemListCategory'
            />
            <Stack.Screen
                component={ItemDetail}
                name='ItemDetail'
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})