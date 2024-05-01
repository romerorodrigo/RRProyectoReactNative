import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from "react"
import { FontAwesome5 } from "@expo/vector-icons"
import { colors } from "../constants/colors"

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("")

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome5 name="search" size={35} color="gray" />
      </Pressable>
      <Pressable onPress={() => setKeyword("")}>
        <FontAwesome5 name="eraser" size={35} color="gray" />
      </Pressable>
      <Pressable onPress={goBack}>
        <FontAwesome5 name="backspace" size={35} color="gray" />
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
    width: '60%',
    padding: 8,
    fontSize: 20,
    backgroundColor: colors.gray100,
    color: colors.gray900,
    borderRadius: 10,
  },
})
