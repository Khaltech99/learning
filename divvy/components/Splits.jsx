import { Image, View, FlatList } from "react-native";
import React from "react";
import GeistText from "./GeistText";
import { colors } from "../constants/color";
import { splitsData } from "../utils/data";
import { ScaledSheet } from "react-native-size-matters";

const Splits = ({ searchQuery = "" }) => {
  // filter only when searchQuery exists
  const filteredData = searchQuery
    ? splitsData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : splitsData;

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      {/* left */}
      <View style={styles.leftContainer}>
        <View
          style={[
            styles.imgContainer,
            { backgroundColor: item.backgroundColor },
          ]}
        >
          <Image source={item.icon} style={styles.img} />
        </View>

        <View>
          <GeistText style={styles.title}>{item.title}</GeistText>
          <GeistText style={styles.text}>{item.dueDate}</GeistText>
        </View>
      </View>

      {/* right */}
      <View style={styles.rightContainer}>
        <GeistText style={styles.title}>
          ₦ {item.amount.toLocaleString()}
        </GeistText>
        <GeistText style={styles.textMembers}>{item.members} members</GeistText>
      </View>
    </View>
  );

  return (
    <FlatList
      data={filteredData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ gap: 15, paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
    />
  );
};

export default Splits;

const styles = ScaledSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: "10@s",
  },

  rightContainer: {
    alignItems: "flex-end",
  },

  imgContainer: {
    width: "45@s",
    height: "45@s",
    borderRadius: "45@s",
    justifyContent: "center",
    alignItems: "center",
    padding: "10@s",
    backgroundColor: colors.customLemon,
    elevation: 6,
  },

  img: {
    width: "100%",
    height: "100%",
    borderRadius: "45@s",
  },

  title: {
    fontSize: "14@ms",
    fontWeight: "500",
  },

  text: {
    fontSize: "11@ms",
    color: colors.customBlackOpacity60,
    fontWeight: "400",
  },

  textMembers: {
    fontSize: "10@ms",
    color: colors.customBlackOpacity60,
    fontWeight: "400",
  },
});
