import {Image,Pressable,StyleSheet,Text,View,useWindowDimensions} from "react-native"
import React, { useEffect, useState } from "react"
import { FontAwesome5 } from "@expo/vector-icons"
import { colors } from "../constants/colors"
import { useDispatch } from "react-redux"
import { useGetProductByIdQuery } from "../services/shopService"
import { addCartItem, removeCartItem } from "../features/cartSlice"
  
  const ItemDetail = ({route, navigation }) => {

    const dispatch = useDispatch()
    const [orientation, setOrientation] = useState("portrait")
    const { width, height } = useWindowDimensions()
    const {productId: idSelected} = route.params 
    const {data: product, error, isLoading} = useGetProductByIdQuery(idSelected)
    const handleAddCart = () => {dispatch(addCartItem({...product, quantity: 1}))}
    const handleRemoveCart = () => {dispatch(removeCartItem({...product, quantity: 1}))}

    useEffect(() => {
      if (width > height) setOrientation("landscape")
      else setOrientation("portrait")
    }, [width, height])
  
    return (
        <View style={orientation === "portrait" ? styles.generalView : styles.generalViewLandscape}>
        {product ? (
        <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape}>
            <Image source={{ uri: product.images[0] }} style={orientation === "portrait" ? styles.image : styles.imageLandscape}/>
            <View style={orientation === "portrait" ? styles.textContainer : styles.textContainerLandscape}>
                <Text style={styles.titleStyle}>{product.title}</Text>
                <Text style={styles.descStyle}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <View style={orientation === "portrait" ? styles.buttonContainer : styles.buttonContainerLandscape}>
                    <Pressable onPress={() => navigation.goBack()}><FontAwesome5 name="backspace" size={50} color="gray" /></Pressable>
                    <Pressable onPress={handleAddCart}><FontAwesome5 name="cart-plus" size={50} color="gray"/></Pressable>
                    <Pressable onPress={handleRemoveCart}><FontAwesome5 name="cart-arrow-down" size={50} color="gray"/></Pressable>
                </View>
            </View>
        </View>
        ) : null}
      </View>
    )
  }
  
  export default ItemDetail
  
  const styles = StyleSheet.create({
    generalView: {
        backgroundColor:colors.allBlack,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
    },
    generalViewLandscape: {
        backgroundColor:colors.allBlack,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginVertical: 10,
        
    },    
    mainContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    mainContainerLandscape: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20,
    },
    image: {
        width: '100%',
        height: '60%',
        borderRadius: 20,
        padding: 10,
        borderWidth: 3,      
        resizeMode: 'contain'  
    },
    imageLandscape: {
        width: '30%',
        height: 250,
        resizeMode: 'contain', 
    },
    textContainer: {
        marginTop: 20,
        flexDirection: "column",
        width: '100%',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: colors.gray500
    },
      textContainerLandscape: {
        width: '70%',
        flexDirection: 'column',
    },
    titleStyle: {
        color: colors.gray500,
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 10,
        textAlign: 'left'
    },
    descStyle: {
        color: colors.gray100,
        fontSize: 18,
        marginTop: 10,
        marginLeft:10,
        textAlign: 'left'
    
    },
    price: {
        textAlign: 'right',
        width: '100%',
        color: colors.gray500,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },
    buttonContainer: {
        textAlign: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    buttonContainerLandscape: {
        alignItems: 'flex-end',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    }    
  })  