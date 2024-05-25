import {Image,StyleSheet,Text,View,useWindowDimensions} from "react-native"
import React, { useEffect, useState } from "react"
import { colors } from "../constants/colors"
import { useDispatch } from "react-redux"
import { useGetProductByIdQuery } from "../services/shopService"
import { addCartItem } from "../features/cartSlice"
import CustomButton from "../components/custom/customButton"
import Swiper from "react-native-swiper";

  
  const ItemDetail = ({route, navigation }) => {

    const dispatch = useDispatch()
    const [orientation, setOrientation] = useState("portrait")
    const { width, height } = useWindowDimensions()
    const {productId: idSelected} = route.params 
    const {data: product, error, isLoading} = useGetProductByIdQuery(idSelected)
    const handleAddCart = () => {dispatch(addCartItem({...product, quantity: 1}))}

    useEffect(() => {
      if (width > height) setOrientation("landscape")
      else setOrientation("portrait")
    }, [width, height])
  
    const handleGoBack = () => {navigation.goBack()}

    return (
        <View style={orientation === "portrait" ? styles.generalView : styles.generalViewLandscape}>
        {product ? (
        <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape}>
            <Swiper style={styles.wrapper} showsButtons={true}>
            {product.images.map((image, index) => (
                <View key={index} style={styles.slide}>
                <Image source={{ uri: image }} style={styles.image} />
                </View>
            ))}
            </Swiper>
            <View style={orientation === "portrait" ? styles.textContainer : styles.textContainerLandscape}>
                <Text style={styles.titleStyle}>{product.title}</Text>
                <Text style={styles.descStyle}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <View style={orientation === "portrait" ? styles.buttonContainer : styles.buttonContainerLandscape}>
                <CustomButton
                    name={"backspace"}
                    size={40}
                    onConfirm={handleGoBack}
                />
                <CustomButton
                    name={"cart-plus"}
                    size={40}
                    onConfirm={handleAddCart}
                />
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
        marginTop: 30,
        marginBottom: 30,
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
        height: '100%',
        borderRadius: 10,
        padding: 10,
        borderWidth: 3,      
        resizeMode: 'contain',  
        backgroundColor:colors.allBlack,
        borderColor: colors.gray200
    },
    imageLandscape: {
        width: '30%',
        height: '100%',
        borderRadius: 10,
        padding: 10,
        borderWidth: 3,      
        resizeMode: 'contain', 
        backgroundColor:colors.allBlack,
        borderColor: colors.gray200
    },
    textContainer: {
        width: '100%',
        height: '40%',
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor:colors.gray900,        
        borderColor: colors.gray200,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
      textContainerLandscape: {
        width: '65%',
        height: '100%',
        marginRight: 10,
        flexDirection: 'column',
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor:colors.gray900,        
        borderColor: colors.gray200,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
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
    },
    wrapper: {
        height: '100%',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.allBlack,
    },
  })  