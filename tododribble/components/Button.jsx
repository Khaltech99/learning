import { View } from "react-native";
import React from "react";
import { colors } from "@/utils/colors";
import { ScaledSheet } from "react-native-size-matters";

const Button = ({
  backgroundColor = colors.whiteText,
  style,
  children,
  borderRadius = 100,
}) => {
  return (
    <View
      style={[
        styles.button,
        { borderRadius: borderRadius, backgroundColor: backgroundColor },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Button;

const styles = ScaledSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "40@s",
    height: "40@s",
    padding: "20@s",
  },
});
