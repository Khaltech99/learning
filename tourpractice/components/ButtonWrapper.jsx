import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ButtonWrapper = ({ bg = "#000", style, children }) => {
  return (
    <TouchableOpacity style={[styles.wrapper, { backgroundColor: bg }, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonWrapper;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
