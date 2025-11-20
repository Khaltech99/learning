import { Stack } from "expo-router";
import FontProvider from "../constants/FontPovider";

export default function RootLayout() {
  return (
    <FontProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(screens)/onboardingscreen" />
        <Stack.Screen name="(screens)/addExpensesScreen" />
      </Stack>
    </FontProvider>
  );
}
