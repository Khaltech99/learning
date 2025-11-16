import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "@/utils/colors";
import Button from "./Button";
import {
  Folder,
  Plus,
  Star,
  Briefcase,
  Flag,
  CheckCircle,
  Circle,
} from "lucide-react-native";
import { ScaledSheet } from "react-native-size-matters";

const iconList = ["", Briefcase, Star, Folder, Flag, CheckCircle, Circle];

const Card = ({ item, backgroundColor, index }) => {
  // Get icon based on index, cycling through the iconList
  const IconComponent = iconList[index % iconList.length];

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      {item.isPlus ? (
        <TouchableOpacity style={[styles.plusContainer, { width: "100%" }]}>
          <Plus color={colors.whiteText} size={40} style={styles.iconPlus} />
          <Text style={{ color: colors.whiteText, textAlign: "center" }}>
            Create group
          </Text>
        </TouchableOpacity>
      ) : (
        <>
          {/* icon and title wrapper */}
          <View style={styles.iconCountContainer}>
            <Button>
              <IconComponent fill={"black"} color={"black"} />
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
