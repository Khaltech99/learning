import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";
import { colors } from "./../constants/color";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboardingscreen");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.customWhite,
      }}
    >
      <Image source={require("../assets/images/logobig.png")} />
    </View>
  );
}
