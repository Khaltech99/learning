import {
  Image,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import GeistText from "../../components/GeistText";
import CustomInput from "../../components/CustomInput";
import TextButton from "../../components/TextButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../constants/color";
import { useRouter } from "expo-router";

const Login = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const isValid = password.length > 0; // simple validation

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1, width: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
          keyboardShouldPersistTaps="handled"
        >
          {/* logo */}
          <View style={styles.logoImgContainer}>
            <Image
              source={require("../../assets/images/logosmall.png")}
              style={styles.logoImg}
              resizeMode="contain"
            />
          </View>

          {/* welcome text */}
          <GeistText style={styles.title}>Welcome Back, David</GeistText>
          <GeistText style={styles.text}>
            Please provide your password to access your account
          </GeistText>

          {/* password input */}
          <CustomInput
            label={"Password"}
            placeholder={"Enter your password"}
            value={password}
            onChangeText={setPassword}
          />

          {/* forgot password */}
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity>
              <GeistText style={styles.forgotPasswordText}>
                Forgot Password?
              </GeistText>
            </TouchableOpacity>
          </View>

          {/* login button */}
          <TextButton
            background={isValid ? colors.customBlue : colors.customBorder2}
            style={{
              ...styles.button,
              color: isValid ? colors.customTextwhite : colors.customTextGray, // dynamic text color
            }}
          >
            Log in
          </TextButton>

          {/* register section */}
          <View style={styles.haveAccountContainer}>
            <GeistText style={styles.haveAccountText}>
              Havent registered yet?
            </GeistText>
            <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
              <GeistText
                style={[styles.haveAccountText, styles.haveAccountSignIn]}
              >
                Register
              </GeistText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.customWhite,
    paddingHorizontal: "20@s",
    paddingTop: "60@vs",
    alignItems: "center",
  },
  logoImgContainer: {
    marginBottom: "15@vs",
  },
  logoImg: {},
  title: {
    fontSize: "25@ms",
    lineHeight: "100%",
    marginBottom: "10@vs",
    fontWeight: 500,
  },
  text: {
    textAlign: "center",
    fontSize: "15@ms",
    color: colors.customBlackOpacity60,
    marginBottom: "15@vs",
    fontWeight: 400,
  },
  forgotPasswordContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: "30@vs",
  },
  forgotPasswordText: {
    fontSize: "15@ms",
    fontWeight: 400,
    color: colors.customBlue,
  },
  button: {
    fontSize: "16@ms",
    borderRadius: "16@s",
    fontWeight: 500,
  },
  haveAccountContainer: {
    flexDirection: "row",
    gap: "3@s",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15@vs",
  },
  haveAccountText: {
    fontSize: "15@ms",
    lineHeight: "20@vs",
    color: colors.customBlackOpacity,
  },
  haveAccountSignIn: {
    color: colors.customBlue,
  },
});
