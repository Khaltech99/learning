import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchWrapper from "./../components/SearchWrapper";
import CountryScroll from "../components/CountryScroll";
import FancyImage from "../components/FancyImage";
import ButtonWrapper from "../components/ButtonWrapper";
import { ChevronRight } from "lucide-react-native";

const { width } = Dimensions.get("window");

// Optional: use a moderate scale factor for larger screens
const scale = width > 380 ? 1.1 : 1;

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        {/* ---- LEFT: Greeting ---- */}
        <View>
          <Text style={styles.userName}>Hello, Venessa</Text>
          <Text style={styles.welcomeText}>Welcome to tripGlide</Text>
        </View>

        {/* ---- RIGHT: Avatar ---- */}
        <Image
          source={require("../assets/images/—Pngtree—cartoon color simple male avatar_21692040.png")} // <-- renamed file
          style={styles.avatar}
          resizeMode="contain"
        />
      </View>
      <SearchWrapper />
      <CountryScroll />
      {/* <Image
        source={require("../assets/images/rio1.jpg")}
        style={styles.bgImage}
      /> */}
      <FancyImage />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#f1f1f1",
    height: "100%",
  },

  welcomeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 24,
  },

  /* ---------- TEXT ---------- */
  userName: {
    fontSize: 26 * scale, // big, bold greeting
    fontWeight: "700",
    color: "#222",
    lineHeight: 32 * scale,
  },
  welcomeText: {
    fontSize: 15 * scale, // subtle sub-title
    color: "#666",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginTop: 2,
  },

  /* ---------- AVATAR ---------- */
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 100,
    backgroundColor: "#f0f0f0",
  },
  bgImage: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
});
