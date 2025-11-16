import React, { useEffect, useRef } from "react";
import { TouchableOpacity, StyleSheet, Animated } from "react-native";
import { colors } from "./utils/colors";

const CustomSwitch = ({
  value,
  onValueChange,
  trackWidth = 60,
  trackHeight = 32,
}) => {
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [value]);

  const thumbTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, trackWidth - trackHeight + 2],
  });

  const trackColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#d1d5db", colors.primary],
  });

  const handleToggle = () => {
    onValueChange(!value);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleToggle}>
      <Animated.View
        style={[
          styles.track,
          {
            width: trackWidth,
            height: trackHeight,
            backgroundColor: trackColor,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              width: trackHeight - 4,
              height: trackHeight - 4,
              transform: [{ translateX: thumbTranslateX }],
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  track: {
    borderRadius: 100,
    justifyContent: "center",
  },
  thumb: {
    backgroundColor: "#ffffff",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 4,
  },
});

//check this ater
