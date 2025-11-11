import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import { Search, SlidersHorizontal } from "lucide-react-native";

const SearchWrapper = () => {
  return (
    <View style={styles.container}>
      <Search size={30} color="#555" />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <ButtonWrapper bg="#000">
        <SlidersHorizontal size={20} color="white" />
      </ButtonWrapper>
    </View>
  );
};

export default SearchWrapper;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
    elevation: 2, // soft shadow on Android
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});
