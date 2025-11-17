import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Text } from "react-native";

export const Loading = () => {
  return <Text>Loading Fonts...</Text>;
};

export default function FontProvider({ children }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Geist-Regular": require("../assets/fonts/Geist-Regular.ttf"),
        "Geist-Medium": require("../assets/fonts/Geist-Medium.ttf"),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) return <Loading />; // or a simple loading View

  return children;
}
