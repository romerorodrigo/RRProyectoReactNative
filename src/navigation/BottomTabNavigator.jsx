import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StyleSheet, View } from "react-native"
import { colors } from "../constants/colors"
import { FontAwesome5 } from "@expo/vector-icons"
import HomeStackNavigator from "./NavigatorHomeStack"
import Header from "../components/Header"
import CartStack from "./NavigatorCartStack"
import OrderStack from "./NavigatorOrderStack"

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        header: () => {
            return <Header route={route} />
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
    })}
    >
        <Tab.Screen name="Shop" component={HomeStackNavigator} options={{tabBarIcon: ({ focused }) => {
            return (
                <View><FontAwesome5 name="store" size={30} color={focused ? "black" : colors.gray200}/></View>
            )
        },}}/>
        <Tab.Screen name="Cart" component={CartStack} options={{tabBarIcon: ({ focused }) => {
            return (
                <View><FontAwesome5 name="shopping-cart" size={30} color={focused ? "black" : colors.gray200}/></View>
            )
        },}}/>
        <Tab.Screen name="Order" component={OrderStack} options={{tabBarIcon: ({ focused }) => {
            return (
                <View><FontAwesome5 name="file-invoice" size={30} color={focused ? "black" : colors.gray200}/></View>
            )
        },}}/>        
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.gray400,
        shadowColor: "black",
        elevation: 4,
        borderRadius: 15,
        height: 60,
    },
})