import { Tabs } from "expo-router";
import { Image, View } from "react-native";

import HomeImg from "../assets/icons/home.png";
import HeartImg from "../assets/icons/heart.png";
import ReplaceImg from "../assets/icons/replace.png";
import MenuImg from "../assets/icons/circle.png";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000",
          height: 80,
          marginHorizontal: 20,
          marginBottom: 35,
          borderRadius: 100,
          padding: 10,
          position: "absolute",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        },
        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                backgroundColor: focused ? "#f1f1f1" : "transparent",
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: focused ? 0.5 : 0,
                shadowRadius: 3,
                elevation: focused ? 6 : 0,
              }}
            >
              <Image
                source={HomeImg}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? "#000" : "#fff",
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        }}
      />

      {/* Calendar */}
      <Tabs.Screen
        name="calender"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                backgroundColor: focused ? "#f1f1f1" : "transparent",
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: focused ? 0.5 : 0,
                shadowRadius: 3,
                elevation: focused ? 6 : 0,
              }}
            >
              <Image
                source={ReplaceImg}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? "#000" : "#fff",
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        }}
      />

      {/* Favorite */}
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                backgroundColor: focused ? "#f1f1f1" : "transparent",
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: focused ? 0.5 : 0,
                shadowRadius: 3,
                elevation: focused ? 6 : 0,
              }}
            >
              <Image
                source={HeartImg}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? "#000" : "#fff",
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        }}
      />

      {/* Menu */}
      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                backgroundColor: focused ? "#f1f1f1" : "transparent",
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: focused ? 0.5 : 0,
                shadowRadius: 3,
                elevation: focused ? 6 : 0,
              }}
            >
              <Image
                source={MenuImg}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? "#000" : "#fff",
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
