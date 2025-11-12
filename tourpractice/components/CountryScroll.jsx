// CountryScroll.jsx
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { countryData } from "../data";

const CountryScroll = () => {
  // Default active continent
  const [activeContinent, setActiveContinent] = useState("South America");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your next trip</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.row}>
          {countryData.map((item) => {
            const isActive = item.continent === activeContinent;

            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.item,
                  { backgroundColor: isActive ? "#000" : "#fff" },
                ]}
                onPress={() => setActiveContinent(item.continent)}
              >
                <Text
                  style={[styles.text, { color: isActive ? "#fff" : "#777" }]}
                >
                  {item.continent}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CountryScroll;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 1,
    marginVertical: 10,
    fontStyle: "italic",
    color: "#333",
  },
  scrollContent: {
    paddingVertical: 5,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 100,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "italic",
  },
});
