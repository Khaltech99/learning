import { Image, StyleSheet, View } from "react-native";
import React from "react";
import IconButton from "../../components/IconButton";
import CaretLeft from "../../assets/icons/caretleft.svg";
import GeistText from "../../components/GeistText";
import { useRouter } from "expo-router";
import { colors } from "../../constants/color";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import Pencil from "../../assets/icons/pencil2.svg";

const ProfileTab = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerBackContainer}>
          <IconButton
            backgroundColor="transparent"
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <CaretLeft />
          </IconButton>

          <GeistText style={styles.title}>My profile</GeistText>
        </View>
        <IconButton backgroundColor="transparent" style={styles.backButton}>
          <Pencil />
        </IconButton>
      </View>
      {/* User Information section */}
      <View style={styles.informationContainer}>
        <Image
          source={require("../../assets/images/headphoneguy.jpg")}
          style={styles.avatar}
        />
        <GeistText style={styles.userName}>Ikeh David</GeistText>
        <GeistText style={styles.userEmail}>ikehdavid@gmail.com</GeistText>
      </View>
    </SafeAreaView>
  );
};

export default ProfileTab;

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
  avatar: {
    width: "93@s",
    height: "93@s",
    borderRadius: "93@s",
  },
  title: {
    fontSize: "15@ms",
    color: colors.customBlack,
    fontWeight: "500",
  },

  // USER CSS
  informationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    fontSize: "22@ms",
    color: colors.customBlack,
    fontWeight: "500",
    lineHeight: "100%",
    marginVertical: "8@vs",
  },

  userEmail: {
    fontSize: "14@ms",
    color: colors.customBlackOpacity60,
    fontWeight: "400",
    lineHeight: "100%",
  },
});
