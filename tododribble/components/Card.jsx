import { Text, View } from "react-native";
import React from "react";
import { colors } from "@/utils/colors";
import Button from "./Button";
import { Folder, Plus } from "lucide-react-native";
import { ScaledSheet } from "react-native-size-matters";

export const todoData = [
  { id: "plus", isPlus: true, bg: colors.lightBg },
  { id: "2", title: "Blog", count: "21", bg: colors.pink },
  { id: "3", title: "Personal", count: "12", bg: colors.lightBlue },
  { id: "4", title: "Personal", count: "12", bg: colors.lemon },
];

const Card = ({ item, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      {item.isPlus ? (
        <View style={[styles.plusContainer, { width: "100%" }]}>
          <Plus color={colors.whiteText} size={50} style={styles.iconPlus} />
          <Text style={{ color: colors.whiteText, textAlign: "center" }}>
            Create group
          </Text>
        </View>
      ) : (
        <>
          {/* icon and title wrapper */}
          <View style={styles.iconCountContainer}>
            <Button>
              <Folder fill={"black"} />
            </Button>
            {/* count */}
            <Text style={styles.count}>{item.count}</Text>
          </View>

          <Text style={styles.title}>{item.title}</Text>
        </>
      )}
    </View>
  );
};

export default Card;

const styles = ScaledSheet.create({
  container: {
    borderRadius: "10@s",
    padding: "10@s",
    paddingVertical: "10@vs",
    height: "120@vs",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  iconCountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "15@vs",
  },
  count: {
    fontSize: "40@s",
    color: colors.whiteText,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: "20@s",
  },
  plusContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  iconPlus: {
    marginBottom: "10@vs",
  },
});
