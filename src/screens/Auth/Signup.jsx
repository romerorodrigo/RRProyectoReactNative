import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../../constants/colors";
import { useSignUpMutation } from "../../services/serviceAuth";
import { setUser } from "../../features/userSlice";
import { signupSchema } from "../../validations/authSchema";
import { FontAwesome5 } from "@expo/vector-icons"
import InputForm from "../../components/custom/InputForm";

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    
    const [isPressedConfirm, setIsPressedConfirm] = useState(false);
    const dispatch = useDispatch()
    const [triggerSignUp, result] = useSignUpMutation()

    useEffect(()=> {
        if (result.isSuccess) {
            dispatch(setUser({  email: result.data.email,
                                idToken: result.data.idToken})
            )
        }
    }, [result])

    const onSubmit = () => {
        try {
            setErrorMail("")
            setErrorPassword("")
            setErrorConfirmPassword("")
            signupSchema.validateSync({email, password, confirmPassword})
            triggerSignUp({email, password, returnSecureToken: true})
            navigation.goBack()
        } catch (err) {
            switch (err.path) {
                case "email":
                    setErrorMail(err.message)
                    break;
                case "password":
                    setErrorPassword(err.message)
                    break;
                case "confirmPassword":
                    setErrorConfirmPassword(err.message)
                    break;
                default:
                    break;
            }
        }
     };

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Signup</Text>
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
                <InputForm
                    label={"confirm password"}
                    onChange={setconfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}
                />
                <Pressable onPress={onSubmit} onPressIn={() => setIsPressedConfirm(true)} onPressOut={() => setIsPressedConfirm(false)}>
                    <View><FontAwesome5 name="check-circle" size={40} color={isPressedConfirm ? colors.gray800 : colors.gray100}/></View>
                </Pressable>                
                <Text style={styles.sub}>Already have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Signup;

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
