import { TouchableOpacity } from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../constants/color";
import GeistText from "./GeistText";

const TextButton = ({
  style,
  background = colors.customBlue,
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: background }]}
    >
      <GeistText style={style}>{children}</GeistText>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = ScaledSheet.create({
  container: {
    paddingVertical: "10@s",
    paddingHorizontal: "20@s",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "16@s",
    width: "100%",
  },
});
