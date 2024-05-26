import React, { useState, useEffect } from "react"
import { Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../constants/colors"
import { useSignInMutation } from "../../services/serviceAuth"
import { setUser } from "../../features/userSlice"
import { useDispatch } from "react-redux"
import { loginSchema } from "../../validations/authSchema";
import InputForm from "../../components/custom/InputForm"
import CustomButton from "../../components/custom/customButton"
import { insertSession } from "../../persistence"

const Login = ({ navigation }) => {
    const [triggerSignIn, result] = useSignInMutation()
    const [email, setEmail] = useState()
    const [errorMail, setErrorMail] = useState("")
    const [password, setPassword] = useState()
    const [errorPassword, setErrorPassword] = useState("")

    const dispatch = useDispatch()
    const onSubmit = async () => {
        try {
            setErrorMail("")
            setErrorPassword("")
            loginSchema.validateSync({email, password})

            try {
                const result = await triggerSignIn({ email, password }).unwrap()
            } catch (err) {
                setErrorMail("User / Pass does not exist")
            }
        } catch (err) {
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
        if (result?.data && result.isSuccess) {
            (async ()=> {
                try {
                    if (Platform.OS !== 'web') {
                        const response = await insertSession({email: result.data.email, localId: result.data.localId, idToken: result.data.idToken,})
                    }
                    dispatch(
                        setUser({email: result.data.email, idToken: result.data.idToken, localId: result.data.localId,})
                    )
                } catch (error) {
                    alert("Login session error");
                }
            })()
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
                <CustomButton
                    name={"check-circle"}
                    size={40}
                    onConfirm={onSubmit}
                />
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
        backgroundColor: colors.gray600,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        color: colors.allBlack,
        fontWeight: "bold"
    },
    sub: {
        fontSize: 14,
        color: colors.allBlack,
        fontWeight: "bold"

    },
    subLink: {
        fontSize: 14,
        color: "blue",
        fontWeight: "bold"
    },
})
