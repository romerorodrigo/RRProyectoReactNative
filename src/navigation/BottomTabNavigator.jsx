import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StyleSheet, View } from "react-native"
import { colors } from "../constants/colors"
import { FontAwesome5 } from "@expo/vector-icons"
import HomeStack from "./NavigatorHomeStack"
import Header from "../components/Header"
import CartStack from "./NavigatorCartStack"
import OrderStack from "./NavigatorOrderStack"
import ProfileStack from "./NavigatorProfileStack"

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
        <Tab.Screen name="Shop" component={HomeStack} options={{tabBarIcon: ({ focused }) => {
            return (
                <View><FontAwesome5 name="store" size={30} color={focused ? colors.gray100 : colors.gray600}/></View>
            )
        },}}/>
        <Tab.Screen name="Cart" component={CartStack} options={{tabBarIcon: ({ focused }) => {
            return (
                <View><FontAwesome5 name="shopping-cart" size={30} color={focused ? colors.gray100 : colors.gray600}/></View>
            )
        },}}/>
        <Tab.Screen name="Order" component={OrderStack} options={{tabBarIcon: ({ focused }) => {
            return (
                <View><FontAwesome5 name="file-invoice" size={30} color={focused ? colors.gray100 : colors.gray600}/></View>
            )
        },}}/>      
        <Tab.Screen name="Profile" component={ProfileStack} options={{tabBarIcon: ({ focused }) => {
            return (
                <View><FontAwesome5 name="user-alt" size={30} color={focused ? colors.gray100 : colors.gray600}/></View>
            )
        },}}/>                
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.allBlack,
        shadowColor: "black",
        elevation: 4,
        height: 60,
    },
})