import { Image, View, FlatList } from "react-native";
import React from "react";
import GeistText from "./GeistText";
import { colors } from "../constants/color";
import { splitsData } from "../utils/data";
import { ScaledSheet } from "react-native-size-matters";
// Update with correct path

const Splits = () => {
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
      data={splitsData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ gap: 15 }}
      showsVerticalScrollIndicator={false}
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
    height: "45@vs",
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: "10@s",
    backgroundColor: colors.customLemon,
    elevation: "6@s",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: "14@ms",
    fontWeight: 400,
    lineHeight: "100%",
  },
  text: {
    fontSize: "11@ms",
    color: colors.customBlackOpacity60,
    fontWeight: 400,
    lineHeight: "100%",
  },
  textMembers: {
    fontSize: "10@ms",
    color: colors.customBlackOpacity60,
    fontWeight: 400,
    lineHeight: "100%",
  },
});
