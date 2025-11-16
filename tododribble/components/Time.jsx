import { Text, View } from "react-native";
import React, { useState } from "react";
import Button from "./Button";
import { colors } from "../utils/colors";
import { Clock } from "lucide-react-native";
import CustomSwitch from "./../CustomSwitch";
import { ScaledSheet } from "react-native-size-matters";

const Time = () => {
  const [isTimeEnabled, setIsTimeEnabled] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <View style={styles.timeContainer}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button backgroundColor={colors.primary} borderRadius={10}>
          <Clock color={colors.whiteText} size={20} />
        </Button>
        {/* Time Title and Text container */}

        <View style={styles.timeTitleAndTextContainer}>
          <Text style={styles.timeTitle}>Time</Text>
          <Text style={styles.timeText}>
            {isTimeEnabled ? formatTime(selectedTime) : "No time set"}
          </Text>
        </View>
      </View>

      <CustomSwitch
        value={isTimeEnabled}
        onValueChange={setIsTimeEnabled}
        trackWidth={50}
        trackHeight={30}
      />
    </View>
  );
};

export default Time;

const styles = ScaledSheet.create({
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15@s",
    backgroundColor: "#f9fafb",
    borderRadius: "12@s",
    //marginVertical: "5@vs",
  },
  timeTitleAndTextContainer: {
    justifyContent: "center",
  },
  timeTitle: {
    fontSize: "14@s",
    fontWeight: "600",
    color: colors.blackText,
  },
  timeText: {
    fontSize: "12@s",
    color: colors.todoText,
  },
});
