import {Image,Pressable,StyleSheet,Text,View,useWindowDimensions} from "react-native"
import React, { useEffect, useState } from "react"
import { FontAwesome5 } from "@expo/vector-icons"
import { colors } from "../constants/colors"
import { useDispatch } from "react-redux"
import { useGetProductByIdQuery } from "../services/shopService"
import { addCartItem } from "../features/cartSlice"
  
  const ItemDetail = ({route, navigation }) => {

    const dispatch = useDispatch()
    const [orientation, setOrientation] = useState("portrait")
    const { width, height } = useWindowDimensions()
    const [isPressedCart, setIsPressedCart] = useState(false);
    const [isPressedBack, setIsPressedBack] = useState(false);
    const {productId: idSelected} = route.params 
    const {data: product, error, isLoading} = useGetProductByIdQuery(idSelected)
    const handleAddCart = () => {dispatch(addCartItem({...product, quantity: 1}))}

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
                    <Pressable onPress={() => navigation.goBack()} onPressIn={() => setIsPressedBack(true)} onPressOut={() => setIsPressedBack(false)}>
                        <FontAwesome5 name="backspace" size={40} color={isPressedBack ? colors.gray800 : colors.gray200} />
                    </Pressable>
                    <Pressable onPress={handleAddCart} onPressIn={() => setIsPressedCart(true)} onPressOut={() => setIsPressedCart(false)}>
                        <FontAwesome5 name="cart-plus" size={40} color={isPressedCart ? colors.gray800 : colors.gray200}/>
                    </Pressable>
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
        width: '100%',
        backgroundColor:colors.gray600,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
    },
    generalViewLandscape: {
        backgroundColor:colors.gray600,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginVertical: 10,
        
    },    
    mainContainer: {
        width: '90%',
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
        resizeMode: 'contain',  
        backgroundColor:colors.allBlack,
        borderColor: colors.gray200
    },
    imageLandscape: {
        width: '30%',
        height: 250,
        resizeMode: 'contain', 
        backgroundColor:colors.allBlack,
        borderColor: colors.gray200
    },
    textContainer: {
        width: '100%',
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor:colors.gray900,        
        borderColor: colors.gray200,
        alignItems: 'center',
        justifyContent: 'space-between',
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
        textAlign: 'left',
        flexWrap: 'wrap'
    },
    descStyle: {
        color: colors.gray100,
        fontSize: 18,
        marginTop: 10,
        marginLeft:10,
        textAlign: 'left',
        flexWrap: 'wrap'
    
    },
    price: {
        color: colors.gray500,
        textAlign: 'right',
        width: '100%',
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