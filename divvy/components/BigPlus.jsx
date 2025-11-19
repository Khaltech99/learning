import React from "react";
import Plus from "../assets/icons/plus.svg";
import { TouchableOpacity, View, StyleSheet, Platform } from "react-native";
export default function BigPlus({
  size = 60,
  color = "#2979FF",
  iconColor = "#FFFFFF",
  onPress,
  elevation = 6,
  style,
  accessibilityLabel = "Add",
}) {
  const radius = size / 2;
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      activeOpacity={0.85}
      style={[
        styles.wrapper,
        {
          width: size,
          height: size,
          borderRadius: radius,
          backgroundColor: color,
          ...(Platform.OS === "android"
            ? { elevation: elevation }
            : {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: elevation / 2 },
                shadowOpacity: 0.25,
                shadowRadius: elevation,
              }),
        },
        style,
      ]}
    >
      <View style={styles.center} pointerEvents="none">
        <Plus />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    lineHeight: undefined,
    fontWeight: "700",
  },
});
