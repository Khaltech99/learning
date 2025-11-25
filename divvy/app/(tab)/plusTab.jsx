import {
  Image,
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import GeistText from "./../../components/GeistText";
import IconButton from "./../../components/IconButton";
import CaretLeft from "../../assets/icons/caretleft.svg";
import CaretRightNew from "../../assets/icons/caretrightnew.svg";
import { colors } from "../../constants/color";
import CustomInput from "../../components/CustomInput";
import TextButton from "./../../components/TextButton";
import { slideImages, splitUserData } from "../../utils/data";
import { useRouter } from "expo-router";

const PlusTab = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [splitName, setSplitName] = useState("");
  const [splitDescription, setSplitDescription] = useState("");
  const [timeline, setTimeline] = useState("");
  const [username, setUsername] = useState("");

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slideImages[currentIndex];
  // Check if all fields are filled
  const isFormValid =
    splitName.trim() !== "" &&
    splitDescription.trim() !== "" &&
    timeline.trim() !== "" &&
    username.trim() !== "";

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 100 }} // extra space for keyboard
          stickyHeaderIndices={[0]}
        >
          {/* HEADER */}
          <View
            style={{ zIndex: 1000, backgroundColor: "rgba(255,255,255,1)" }}
          >
            <View style={styles.headerContainer}>
              <View style={styles.headerBackContainer}>
                <IconButton
                  backgroundColor="transparent"
                  style={styles.backButton}
                  onPress={() => router.back()}
                >
                  <CaretLeft />
                </IconButton>
                <View>
                  <GeistText style={styles.title}>Create Splits</GeistText>
                  <GeistText style={styles.text}>Create a split here</GeistText>
                </View>
              </View>
              <Image
                source={require("../../assets/images/headphoneguy.jpg")}
                style={styles.avatar}
              />
            </View>
          </View>

          {/* IMAGE SCROLL */}
          <View style={styles.imageScroll}>
            <IconButton
              onPress={handlePrev}
              backgroundColor="transparent"
              style={styles.backButton}
            >
              <CaretLeft />
            </IconButton>
            <View
              style={[
                styles.imageContainer,
                { backgroundColor: currentSlide.backgroundColor },
              ]}
            >
              <Image
                source={
                  currentSlide.busImage ||
                  currentSlide.homeImage ||
                  currentSlide.laptopImage
                }
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </View>
            <IconButton
              onPress={handleNext}
              backgroundColor="transparent"
              style={styles.backButton}
            >
              <CaretRightNew />
            </IconButton>
          </View>

          {/* FORM */}
          <GeistText style={styles.title}>Create a New Split</GeistText>
          <GeistText style={styles.text}>Manage your splits with us</GeistText>

          <View style={{ paddingBottom: 10 }}>
            <CustomInput
              label="Split Name"
              placeholder="Enter split name"
              value={splitName}
              onChangeText={setSplitName}
            />
            <CustomInput
              label="Split Description"
              placeholder="Enter split description"
              value={splitDescription}
              onChangeText={setSplitDescription}
            />
            <CustomInput
              label="Timeline"
              placeholder="e.g Two weeks"
              value={timeline}
              onChangeText={setTimeline}
            />
          </View>

          {/* Suggested Friends */}
          <GeistText style={styles.title}>
            Add new people to this split
          </GeistText>
          <GeistText style={styles.text}>Suggested friends</GeistText>
          <ScrollView
            horizontal
            style={styles.suggestedScrollVew}
            contentContainerStyle={{ gap: 20 }}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled
          >
            {splitUserData.map((item, index) => (
              <View key={index}>
                <Image source={item.image} style={styles.suggestedImage} />
                <GeistText style={styles.suggestedName}>@{item.user}</GeistText>
              </View>
            ))}
          </ScrollView>

          {/* New Username */}
          <CustomInput
            label="Enter Username"
            placeholder="Enter username here"
            value={username}
            onChangeText={setUsername}
          />

          {/* Submit */}
          <TextButton
            background={isFormValid ? colors.customBlue : colors.customBorder2}
            style={[
              styles.submit,
              {
                color: isFormValid
                  ? colors.customTextwhite
                  : colors.customBlackOpacity60,
              },
            ]}
            onPress={() => router.push("/(screens)/addExpensesScreen")}
          >
            Continue
          </TextButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PlusTab;

const styles = ScaledSheet.create({
  container: {
    paddingTop: "15@vs",
    paddingHorizontal: "20@s",
    backgroundColor: colors.customWhite,
    flex: 1,
  },

  // HEADER CSS
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "30@vs",
  },
  headerBackContainer: {
    flexDirection: "row",
    gap: "15@s",
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
  avatar: {
    width: "40@s",
    height: "40@s",
    borderRadius: "40@s",
  },
  title: {
    fontSize: "15@ms",
    color: colors.customBlack,
    fontWeight: "500",
    marginBottom: "5@vs",
  },
  text: {
    fontSize: "12@ms",
    color: colors.customBlackOpacity60,
  },

  // IMAGE SCROLL CSS
  imageScroll: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10@s",
    marginBottom: "25@s",
  },
  imageContainer: {
    width: "61@s",
    height: "61@s",
    borderRadius: "61@s",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: 10,
  },

  // SUGGESTED CSS
  suggestedScrollVew: {
    flexDirection: "row",
    marginTop: "15@vs",
  },
  suggestedImage: {
    width: "40@s",
    height: "40@s",
    borderRadius: "40@s",
  },
  suggestedName: {
    fontSize: "10@ms",
    color: colors.customBlackOpacity60,
    marginTop: "2@vs",
  },

  // SUBMIT CSS
  submit: {
    color: colors.customTextwhite,
    padding: 5,
  },
});
