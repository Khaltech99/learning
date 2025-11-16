import { Text, View } from "react-native";
import React, { useState } from "react";
import Button from "./Button";
import { colors } from "../utils/colors";
import { Calendar as CalendarIcon } from "lucide-react-native";
import CustomSwitch from "./../CustomSwitch";
import CustomCalendar from "./CustomCalendar";
import { ScaledSheet } from "react-native-size-matters";

const Calendar = () => {
  const [isDueDateEnabled, setIsDueDateEnabled] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <View>
      <View style={styles.calendarContainer}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Button backgroundColor={colors.primary} borderRadius={10}>
            <CalendarIcon color={colors.whiteText} size={20} />
          </Button>
          {/* calendar Title and Text container */}

          <View style={styles.calendarTitleAndTextContainer}>
            <Text style={styles.calendarTitle}>Due Date</Text>
            <Text style={styles.calendarText}>
              {isDueDateEnabled ? formatDate(selectedDate) : "No date"}
            </Text>
          </View>
        </View>

        <CustomSwitch
          value={isDueDateEnabled}
          onValueChange={setIsDueDateEnabled}
          trackWidth={50}
          trackHeight={30}
        />
      </View>

      {/* Collapsible Custom Calendar */}
      {isDueDateEnabled && (
        <View style={styles.calendarPickerContainer}>
          <CustomCalendar
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
          />
        </View>
      )}
    </View>
  );
};

export default Calendar;

const styles = ScaledSheet.create({
  calendarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15@s",
    backgroundColor: "#f9fafb",
    borderRadius: "12@s",
    marginVertical: 0,
  },
  calendarTitleAndTextContainer: {
    justifyContent: "center",
  },
  calendarTitle: {
    fontSize: "14@s",
    fontWeight: "600",
    color: colors.blackText,
  },
  calendarText: {
    fontSize: "12@s",
    color: colors.todoText,
  },
  calendarPickerContainer: {
    backgroundColor: "#f9fafb",
    borderRadius: "12@s",
    padding: "10@s",
    marginTop: "-10@vs",
    marginBottom: "10@vs",
  },
});
