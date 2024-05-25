import React, { useEffect, useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { colors } from "../constants/colors"
import CustomButton from "./custom/customButton"

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("")
  const [isPressedErase, setIsPressedErase] = useState(false);
  const [isPressedBack, setIsPressedBack] = useState(false);

  useEffect(() => {
    onSearch(keyword)
  }, [keyword])

  const handleEraser = () => {setKeyword("")}

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <CustomButton
          name={"eraser"}
          size={35}
          onConfirm={handleEraser}
      />
      <CustomButton
          name={"backspace"}
          size={35}
          onConfirm={goBack}
      />
      {error ? <Text>{error}</Text> : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    paddingBottom:10,
  },
  input: {
    width: '70%',
    padding: 8,
    fontSize: 20,
    backgroundColor: colors.gray100,
    color: colors.gray900,
    borderRadius: 10,
  },
})