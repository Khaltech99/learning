import { Image, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GeistText from "../../components/GeistText";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../constants/color";
import Search from "../../assets/icons/search.svg";
import Splits from "../../components/Splits";

const SplitsTab = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <GeistText style={styles.title}>Your Splits</GeistText>
          <GeistText style={styles.text}>View all your Splits here</GeistText>
        </View>

        <Image
          source={require("../../assets/images/headphoneguy.jpg")}
          style={styles.avatar}
        />
      </View>

      {/* search */}
      <View style={styles.searchContainer}>
        <Search />
        <TextInput
          placeholder="Search for a split"
          placeholderTextColor={colors.customBlackOpacity}
          style={styles.input}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* list */}
      <View style={{ flex: 1 }}>
        <Splits searchQuery={searchQuery} />
      </View>
    </SafeAreaView>
  );
};

export default SplitsTab;

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: "20@s",
    flex: 1,
    backgroundColor: colors.customWhite,
    paddingTop: "10@vs",
  },

  // HEADER
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20@vs",
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
    fontWeight: "400",
  },

  // SEARCH
  searchContainer: {
    flexDirection: "row",
    paddingVertical: "5@vs",
    paddingHorizontal: "15@s",
    borderColor: colors.customBorder2,
    borderWidth: "1@s",
    borderRadius: "15@s",
    alignItems: "center",
    gap: "10@s",
    marginBottom: "20@vs",
  },
  input: {
    flex: 1,
  },
});
