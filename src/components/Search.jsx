import React, { useEffect, useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { colors } from "../constants/colors"

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("")
  const [isPressedErase, setIsPressedErase] = useState(false);
  const [isPressedBack, setIsPressedBack] = useState(false);

  useEffect(() => {
    onSearch(keyword)
  }, [keyword])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable onPress={() => setKeyword("")} onPressIn={() => setIsPressedErase(true)} onPressOut={() => setIsPressedErase(false)}>
        <FontAwesome5 name="eraser" size={35} color={isPressedErase ? colors.gray800 : colors.gray200} />
      </Pressable>
      <Pressable onPress={goBack} onPressIn={() => setIsPressedBack(true)} onPressOut={() => setIsPressedBack(false)}>
        <FontAwesome5 name="backspace" size={35} color={isPressedBack ? colors.gray800 : colors.gray200} />
      </Pressable>
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