import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import BottomTabNavigator from './BottomTabNavigator'
import NavigatorAuthStack from './NavigatorAuthStack'
import { useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen name="Auth" component={NavigatorAuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})