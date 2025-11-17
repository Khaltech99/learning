// components/CustomInput.js
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import React from "react";
import GeistText from "./GeistText";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../constants/color";

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  error = "",
  keyboardType = "default",
  icon,
  onPressIn, // ← for date picker, etc.
  ...rest
}) => {
  const isClickable = !!onPressIn;

  return (
    <View style={styles.container}>
      {label && <GeistText style={styles.label}>{label}</GeistText>}

      <TouchableOpacity
        activeOpacity={1}
        onPressIn={onPressIn}
        disabled={!isClickable} // ← only respond to press if onPressIn exists
        style={[styles.inputWrapper, error ? styles.inputError : null]}
      >
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.customBlackOpacity}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          pointerEvents={isClickable ? "none" : "auto"} // ← KEY LINE
          editable={!isClickable} // ← KEY LINE
          {...rest}
        />
        {icon && <View style={styles.icon}>{icon}</View>}
      </TouchableOpacity>

      {error ? <GeistText style={styles.errorText}>{error}</GeistText> : null}
    </View>
  );
};

export default CustomInput;

const styles = ScaledSheet.create({
  container: {
    width: "100%",
    marginVertical: "10@vs",
  },
  label: {
    fontSize: "14@ms",
    fontWeight: 400,
    color: colors.customBlack,
    marginBottom: "8@vs",
    lineHeight: "100%",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: "45@vs",
    borderWidth: "1@s",
    borderColor: colors.customBorder2,
    borderRadius: "15@s",
    paddingHorizontal: "10@s",
    backgroundColor: colors.customWhite,
  },
  input: {
    flex: 1,
    fontSize: "12@ms",
    color: colors.customBlack,
  },
  icon: {
    marginLeft: "10@s",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: "12@ms",
    marginTop: "3@vs",
  },
});
