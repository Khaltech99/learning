import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchWrapper from "./../components/SearchWrapper";
import CountryScroll from "../components/CountryScroll";
import FancyImage from "../components/FancyImage";

const { width } = Dimensions.get("window");
const scale = width > 380 ? 1.1 : 1;

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* ---- Header ---- */}
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.userName}>Hello, Venessa</Text>
          <Text style={styles.welcomeText}>Welcome to tripGlide</Text>
        </View>

        <Image
          source={require("../assets/images/—Pngtree—cartoon color simple male avatar_21692040.png")}
          style={styles.avatar}
          resizeMode="contain"
        />
      </View>

      <SearchWrapper />
      <CountryScroll />

      {/* 🌆 Image Background + FancyImage Overlay */}
      <View style={styles.overlayWrapper}>
        <Image
          source={require("../assets/images/rio3.jpg")}
          style={styles.bgImage}
          resizeMode="cover"
        />

        {/* FancyImage sits ON TOP of rio3.jpg */}
        <FancyImage />
      </View>
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

  userName: {
    fontSize: 28 * scale,
    fontWeight: "600",
    color: "#333",
    lineHeight: 32 * scale,
  },
  welcomeText: {
    fontSize: 15 * scale,
    color: "#666",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginTop: 2,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#f0f0f0",
  },

  // 🌆 Parent wrapper to layer image and FancyImage
  overlayWrapper: {
    position: "relative", // key line — makes children position relative to this
    width: "100%",
    height: 300,
    marginTop: 0,
  },

  bgImage: {
    width: "100%",
    height: "85%",
    borderRadius: 20,
    marginTop: 30,
  },
});
