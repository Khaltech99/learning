import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImagesRender = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/rio1.jpg")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {/* Optional content on top */}
        <Text style={styles.text}>Hello Rio!</Text>
      </ImageBackground>
    </View>
  );
};

export default ImagesRender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    overflow: "hidden",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
