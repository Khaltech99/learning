import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "../../components/IconButton";
import CaretLeft from "../../assets/icons/caretleft.svg";
import GeistText from "../../components/GeistText";
import { colors } from "../../constants/color";
import { ScaledSheet } from "react-native-size-matters";
import CustomInput from "../../components/CustomInput";
import TextButton from "../../components/TextButton";
import { useRouter } from "expo-router";

const AddExpensesScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <View style={styles.headerBackContainer}>
          <IconButton
            backgroundColor="transparent"
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <CaretLeft />
          </IconButton>

          <GeistText style={styles.title}>Add Expenses</GeistText>
        </View>

        <View style={styles.stepContainer}>
          <GeistText style={styles.text}>step 1 of 2</GeistText>
          <View style={styles.stepCounter} />
        </View>
      </View>

      {/* MAIN CONTENT WITH KEYBOARD AVOIDING */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {/* TOP FORM */}
          <View style={styles.formContainer}>
            <CustomInput width="70%" label={"Type of Expenses"} />

            <TouchableOpacity style={styles.save}>
              <GeistText
                style={[styles.title, { color: colors.customTextwhite }]}
              >
                Save
              </GeistText>
            </TouchableOpacity>
          </View>

          {/* DETAILS SECTION */}
          <GeistText style={[styles.title, { marginVertical: 15 }]}>
            Details Expenses
          </GeistText>

          {/* DETAILS FORM */}
          <CustomInput
            placeholder={"Enter expense name"}
            label={"Expense Name"}
          />

          <CustomInput
            placeholder={"Select group for this expense"}
            label={"Select group for this expense"}
          />

          <CustomInput
            placeholder={"Enter a short description"}
            label={"Expense description"}
            numberOfLines={2}
          />
          <View style={styles.buttonWrapper}>
            <TextButton
              style={[
                styles.button,
                {
                  color: colors.customBlackOpacity,
                },
              ]}
              background={colors.customGrayBg}
            >
              Create Split
            </TextButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddExpensesScreen;

const styles = ScaledSheet.create({
  container: {
    paddingTop: "5@vs",
    paddingHorizontal: "20@s",
    backgroundColor: colors.customWhite,
    flex: 1,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "8@vs",
  },

  headerBackContainer: {
    flexDirection: "row",
    gap: "15@s",
    alignItems: "center",
  },

  backButton: {
    width: "30@s",
    height: "30@s",
    borderRadius: "40@s",
    borderColor: colors.customBackButton,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: "15@ms",
    color: colors.customBlack,
    fontWeight: "500",
  },

  text: {
    fontSize: "12@ms",
    color: colors.customBlackOpacity60,
  },

  // STEP CSS
  stepContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: "5@s",
  },

  stepCounter: {
    width: "80%",
    height: "2@vs",
    backgroundColor: colors.customBlue,
    borderRadius: "20@s",
  },

  // FORM CSS
  formContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "15@s",
  },

  save: {
    backgroundColor: colors.customBlue,
    height: "45@vs",
    marginTop: "22@vs",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15@s",
  },
  buttonWrapper: {
    marginTop: "60@vs",
  },
  button: {
    padding: "5@s",
    fontSize: "15@ms",
  },
});
