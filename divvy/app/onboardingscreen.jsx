import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  Image,
  View,
  PanResponder,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import GeistText from "./../components/GeistText";
import { colors } from "./../constants/color";
import TextButton from "../components/TextButton";
import { useRouter } from "expo-router";

export const data = [
  {
    image: require("../assets/images/newlycroppedmoney.png"),
    title: "Manage group expenses with ease",
    text: "Easily track shared costs, stay organized, and always know who owes what",
  },
  {
    image: require("../assets/images/newlycroppedbig.png"),
    title: "Split every payment in seconds",
    text: "Add new expenses quickly, split fairly, and keep everyone on the same page",
  },
  {
    image: require("../assets/images/newlycroppedgirl.png"),
    title: "Settle balances without any stress",
    text: "Send gentle reminders, clear dues instantly, and maintain happy group finances",
  },
];

const Onboardingscreen = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  // animations
  const fade = useRef(new Animated.Value(1)).current;
  const slide = useRef(new Animated.Value(0)).current;

  // central animation runner — now runs whenever `index` changes
  const animateSlide = () => {
    fade.setValue(0);
    slide.setValue(20);

    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slide, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // run animation whenever index updates, keeps the dots synced
  useEffect(() => {
    animateSlide();
  }, [index]);

  const goNext = () => {
    setIndex((prev) => {
      if (prev >= data.length - 1) return prev;
      return prev + 1;
    });
  };

  const goPrev = () => {
    setIndex((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  };

  const nextButtonHandler = () => {
    if (index === data.length - 1) {
      router.push("/(auth)/login");
    } else {
      goNext();
    }
  };

  // SWIPE HANDLER — improved thresholds and detection
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gesture) => {
        // start responding only for meaningful horizontal movement
        return (
          Math.abs(gesture.dx) > 10 &&
          Math.abs(gesture.dx) > Math.abs(gesture.dy)
        );
      },
      onPanResponderRelease: (_, gesture) => {
        // threshold for a swipe
        const SWIPE_THRESHOLD = 50;
        if (gesture.dx <= -SWIPE_THRESHOLD) {
          // swipe left -> next
          goNext();
        } else if (gesture.dx >= SWIPE_THRESHOLD) {
          // swipe right -> prev
          goPrev();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {/* logoimage */}
      <Image
        source={require("../assets/images/logosmall.png")}
        style={styles.logoImg}
        resizeMode="contain"
      />

      {/* Onboard Image */}
      <Animated.View
        style={[
          styles.imgContainer,
          { opacity: fade, transform: [{ translateY: slide }] },
        ]}
      >
        <Image
          style={styles.onboardImg}
          resizeMode="contain"
          source={data[index].image}
        />
      </Animated.View>

      {/* Onboard title + text */}
      <Animated.View
        style={{ opacity: fade, transform: [{ translateY: slide }] }}
      >
        <GeistText style={styles.onboardTitle}>{data[index].title}</GeistText>
        <GeistText style={styles.onboardText}>{data[index].text}</GeistText>
      </Animated.View>

      {/* Dots */}
      {/* Dots */}
      <View style={styles.dots}>
        {data.map((_, i) => (
          <Animated.View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor:
                  i === index ? colors.customBlue : colors.customBlue + "40",
                width: i === index ? 20 : 7.56, // increase length when active
              },
            ]}
          />
        ))}
      </View>

      {/* button */}
      <TextButton style={styles.buttonText} onPress={nextButtonHandler}>
        <GeistText>
          {index === data.length - 1 ? "Get Started" : "Next"}
        </GeistText>
      </TextButton>

      <View style={styles.haveAccountContainer}>
        <GeistText style={styles.haveAccountText}>
          Already have an account?
        </GeistText>
        <TouchableOpacity>
          <GeistText style={[styles.haveAccountText, styles.haveAccountSignIn]}>
            Sign in
          </GeistText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboardingscreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.customWhite,
    justifyContent: "center",
    paddingVertical: "50@vs",
    paddingHorizontal: "20@s",
    alignItems: "center",
    fontSize: "16@s",
  },
  logoImg: {
    marginBottom: "30@vs",
  },

  imgContainer: {
    marginHorizontal: "100@s",
  },

  onboardTitle: {
    fontSize: "30@ms",
    fontWeight: 500,
    textAlign: "center",
    marginTop: "30@vs",
    color: colors.customBlack,
    lineHeight: "35@vs",
  },

  onboardText: {
    fontSize: "16@ms",
    textAlign: "center",
    color: colors.customBlackOpacity,
    marginTop: "10@vs",
    lineHeight: "100%",
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "20@vs",
    gap: "5@s",
    width: "100",
  },

  dot: {
    width: "7.56@s",
    height: "7.56@s",
    borderRadius: "5@s",
    backgroundColor: colors.customBlue,
  },

  buttonText: {
    color: colors.customTextwhite,
    fontSize: "17@ms",
  },

  haveAccountContainer: {
    flexDirection: "row",
    gap: "3@s",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15@vs",
  },

  haveAccountText: {
    fontSize: "15@ms",
    lineHeight: "20@vs",
    color: colors.customBlackOpacity60,
    fontWeight: 500,
  },

  haveAccountSignIn: {
    color: colors.customBlue,
  },
});
