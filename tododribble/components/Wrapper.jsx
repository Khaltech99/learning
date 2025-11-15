import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Wrapper = ({ style, children }) => {
  return (
    <SafeAreaView style={[style, styles.container]}>{children}</SafeAreaView>
  );
};

export default Wrapper;

const styles = StyleSheet.create({});
