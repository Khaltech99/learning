import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Wrapper = ({ style, children, edges = ["top", "left", "right"] }) => {
  return (
    <SafeAreaView style={[style, styles.container]} edges={edges}>
      {children}
    </SafeAreaView>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
