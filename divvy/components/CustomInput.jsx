// components/CustomInput.js
import { TextInput, View, TouchableOpacity } from "react-native";
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
  numberOfLines,
  onPressIn,
  width = "100%",
  ...rest
}) => {
  const isClickable = !!onPressIn;
  const isMultiline = numberOfLines && numberOfLines > 1;

  return (
    <View style={[styles.container, { width }]}>
      {label && <GeistText style={styles.label}>{label}</GeistText>}

      <TouchableOpacity
        activeOpacity={1}
        onPressIn={onPressIn}
        disabled={!isClickable}
        style={[
          styles.inputWrapper,
          isMultiline && styles.multilineWrapper,
          error && styles.inputError,
        ]}
      >
        <TextInput
          style={[styles.input, isMultiline && styles.multilineInput]}
          placeholder={placeholder}
          placeholderTextColor={colors.customBlackOpacity}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          pointerEvents={isClickable ? "none" : "auto"}
          editable={!isClickable}
          multiline={isMultiline}
          numberOfLines={numberOfLines}
          textAlignVertical={isMultiline ? "top" : "center"}
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
    marginVertical: "10@vs",
  },

  label: {
    fontSize: "14@ms",
    color: colors.customBlack,
    marginBottom: "8@vs",
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: "1@s",
    borderColor: colors.customBorder2,
    borderRadius: "15@s",
    paddingHorizontal: "10@s",
    backgroundColor: colors.customWhite,
    height: "43@vs", // default height
  },

  multilineWrapper: {
    height: "123@vs", // height override for multiline
    paddingVertical: "10@vs",
    alignItems: "flex-start",
  },

  input: {
    flex: 1,
    fontSize: "12@ms",
    color: colors.customBlack,
  },

  multilineInput: {
    textAlignVertical: "top",
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
