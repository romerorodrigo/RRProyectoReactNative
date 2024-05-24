import React, { useState, useEffect } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../constants/colors"
import { useSignInMutation } from "../../services/serviceAuth"
import { setUser } from "../../features/userSlice"
import { useDispatch } from "react-redux"
import { FontAwesome5 } from "@expo/vector-icons"
import { loginSchema } from "../../validations/authSchema";
import InputForm from "../../components/custom/InputForm"

const Login = ({ navigation }) => {
    const [triggerSignIn, result] = useSignInMutation()
    const [email, setEmail] = useState()
    const [errorMail, setErrorMail] = useState("")
    const [password, setPassword] = useState()
    const [errorPassword, setErrorPassword] = useState("")
    const [isPressedConfirm, setIsPressedConfirm] = useState(false);
    
    const dispatch = useDispatch()
    const onSubmit = () => {
        try {
            setErrorMail("")
            setErrorPassword("")
            loginSchema.validateSync({email, password})
            console.log(validation)
            {triggerSignIn({ email, password })}
            navigation.goBack()
        } catch (err) {
            console.log(err.path)
            console.log(err.message)
            switch (err.path) {
                case "email":
                    setErrorMail(err.message)
                    break;
                case "password":
                    setErrorPassword(err.message)
                    break;
                default:
                    break;
            }
        }
    }

    useEffect(() => {
        if (result.isSuccess) {
            dispatch(
                setUser({email: result.data.email, idToken: result.data.idToken,}),
                navigation.goBack()
            )
        }
    }, [result])

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <InputForm 
                    label={"email"} 
                    onChange={setEmail} 
                    error={errorMail} />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <Pressable onPress={onSubmit} onPressIn={() => setIsPressedConfirm(true)} onPressOut={() => setIsPressedConfirm(false)}>
                    <View><FontAwesome5 name="check-circle" size={40} color={isPressedConfirm ? colors.gray800 : colors.gray100}/></View>
                </Pressable>
                <Text style={styles.sub}>Create a new account</Text>
                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.subLink}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.allBlack
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray800,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: colors.gray500        
    },
    title: {
        fontSize: 22,
        colors: colors.allBlack,
        fontWeight: 'bold'
    },
    sub: {
        fontSize: 14,
        color: colors.allBlack,
        fontWeight: 'bold'

    },
    subLink: {
        fontSize: 14,
        color: "blue",
        fontWeight: 'bold'
    },
})
