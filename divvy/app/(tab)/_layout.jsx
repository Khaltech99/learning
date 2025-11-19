import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";
import Home from "../../assets/icons/home.svg";
import HomeFilled from "../../assets/icons/homeFilled.svg";
import Splits from "../../assets/icons/splitsorigin.svg";
import SplitsFilled from "../../assets/icons/splitFilled.svg";
import Transaction from "../../assets/icons/transaction.svg";
import Profile from "../../assets/icons/profile.svg";
import BigPlus from "../../components/BigPlus";

const Tablayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 75,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          marginTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="homeTab"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, focused, color }) =>
            focused ? <HomeFilled /> : <Home />,
        }}
      />
      <Tabs.Screen
        name="splitsTab"
        options={{
          tabBarLabel: "Splits",
          tabBarIcon: ({ size, focused, color }) =>
            focused ? <SplitsFilled /> : <Splits />,
        }}
      />
      <Tabs.Screen
        name="plusTab"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ size, focused, color }) => (
            <View style={{ marginTop: -40 }}>
              <BigPlus />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="transactionsTab"
        options={{
          tabBarLabel: "Transactions",
          tabBarIcon: ({ size, focused, color }) => <Transaction />,
        }}
      />
      <Tabs.Screen
        name="profileTab"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, focused, color }) => <Profile />,
        }}
      />
    </Tabs>
  );
};

export default Tablayout;
