import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../constants/color";
import { ScaledSheet } from "react-native-size-matters";

const IconButton = ({
  style,
  backgroundColor = colors.customBlue,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, { backgroundColor: backgroundColor }]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = ScaledSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 18,
  },
});
