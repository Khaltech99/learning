import {
  Image,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import GeistText from "../../components/GeistText";
import CustomInput from "../../components/CustomInput";
import TextButton from "../../components/TextButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../constants/color";
import { useRouter } from "expo-router";

const Register = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  // Use a proper Date object for the picker, and a formatted string for display/input
  const [selectedDate, setSelectedDate] = useState(null); // internal Date object
  const [dob, setDob] = useState(""); // displayed value (e.g. "1995-03-20")
  const [gender, setGender] = useState("");
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // button valid if all fields are filled and privacy is agreed
  const isValid = fullName && emailAddress && dob && gender && privacyAgreed;

  const onDateChange = (event, date) => {
    // Android: dismiss picker only when a date is selected (not on cancel)
    // iOS: always hide when selection is made
    if (Platform.OS === "android") {
      setShowDatePicker(false);
    }

    if (date) {
      setSelectedDate(date);
      const formatted = date.toISOString().split("T")[0]; // YYYY-MM-DD
      setDob(formatted);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1, width: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
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
          <GeistText style={styles.title}>Create Your Account</GeistText>
          <GeistText style={styles.text}>
            Fill in the information below to get started
          </GeistText>

          {/* input fields */}
          <CustomInput
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
          />
          <CustomInput
            label="Address"
            placeholder="Enter your email address"
            value={emailAddress}
            onChangeText={setEmailAddress}
          />

          {/* Date of Birth Input + Picker */}
          <CustomInput
            label="Date of Birth"
            placeholder="Select your date of birth"
            value={dob}
            onPressIn={showDatepicker}
          />

          {showDatePicker && (
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onDateChange}
              maximumDate={new Date()}
            />
          )}

          <CustomInput
            label="Gender"
            placeholder="Enter your gender"
            value={gender}
            onChangeText={setGender}
          />

          {/* Privacy & Terms */}
          <View style={styles.privacyContainer}>
            <TouchableOpacity
              onPress={() => setPrivacyAgreed(!privacyAgreed)}
              style={styles.checkbox}
            >
              <View
                style={[
                  styles.checkboxBox,
                  privacyAgreed && styles.checkboxChecked,
                ]}
              >
                {privacyAgreed && (
                  <GeistText style={styles.checkmark}>✓</GeistText>
                )}
              </View>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", flexWrap: "wrap", flex: 1 }}>
              <GeistText style={styles.privacyText}>
                Yes, i have read the {""}
              </GeistText>

              <TouchableOpacity>
                <GeistText style={styles.linkText}>Privacy Policy</GeistText>
              </TouchableOpacity>

              <GeistText style={styles.privacyText}>
                {" "}
                as well as the {""}{" "}
              </GeistText>

              <TouchableOpacity>
                <GeistText style={styles.linkText}>
                  Terms & Conditions
                </GeistText>
              </TouchableOpacity>
              <GeistText style={styles.privacyText}>
                {" "}
                and agreed to them {""}{" "}
              </GeistText>
            </View>
          </View>

          {/* Register button */}
          <TextButton
            background={isValid ? colors.customBlue : colors.customBorder2}
            style={{
              ...styles.button,
              color: isValid ? colors.customTextwhite : colors.customTextGray,
            }}
          >
            Sign up
          </TextButton>

          {/* Already have account */}
          <View style={styles.haveAccountContainer}>
            <GeistText style={styles.haveAccountText}>
              Already have an account?
            </GeistText>
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <GeistText
                style={[styles.haveAccountText, styles.haveAccountSignIn]}
              >
                Sign in
              </GeistText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.customWhite,
    paddingHorizontal: "20@s",
    paddingVertical: "10@vs",

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
    color: colors.customBlackOpacity,
    marginBottom: "15@vs",
    fontWeight: 400,
  },
  privacyContainer: {
    flexDirection: "row",
    alignItems: "flex-center",
    width: "100%",
    marginVertical: "15@vs",
    justifyContent: "center",
  },

  checkbox: {
    marginRight: "10@s",
  },
  checkboxBox: {
    width: "20@s",
    height: "20@s",
    borderWidth: 2,
    borderColor: colors.customBorder2,
    borderRadius: "4@s",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: colors.customBlue,
    borderColor: colors.customBlue,
  },
  checkmark: {
    color: colors.customWhite,
    fontSize: "14@ms",
    fontWeight: "bold",
  },
  privacyText: {
    fontSize: "12@ms",
    color: colors.customBlackOpacity,
  },
  linkText: {
    color: colors.customBlue,
    fontSize: "12@ms",
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
