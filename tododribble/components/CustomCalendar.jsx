import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../utils/colors";

const CustomCalendar = ({ selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isExpanded, setIsExpanded] = useState(false);

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];
  const fullDayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date) => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const handleDatePress = (date) => {
    onDateSelect(date);
  };

  const getCurrentWeekDates = () => {
    const today = new Date();
    const currentDay = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    const weekDates = [];

    // Get all 7 days of the current week
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - currentDay + i);
      weekDates.push(date);
    }

    return weekDates;
  };

  const renderWeekView = () => {
    const weekDates = getCurrentWeekDates();

    return (
      <View style={styles.weekContainer}>
        {weekDates.map((date, index) => {
          const selected = isSelected(date);
          const today = isToday(date);

          return (
            <TouchableOpacity
              key={index}
              style={[styles.weekDayCell, selected && styles.selectedWeekDay]}
              onPress={() => handleDatePress(date)}
            >
              <Text
                style={[
                  styles.weekDayName,
                  selected && styles.selectedWeekDayText,
                ]}
              >
                {fullDayNames[date.getDay()]}
              </Text>
              <Text
                style={[
                  styles.weekDayNumber,
                  selected && styles.selectedWeekDayText,
                  today && !selected && styles.todayText,
                ]}
              >
                {date.getDate()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderMonthView = () => {
    const days = [];
    const totalDays = daysInMonth(currentMonth);
    const firstDay = firstDayOfMonth(currentMonth);

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<View key={`empty-${i}`} style={styles.dayCell} />);
    }

    // Actual days
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      const selected = isSelected(date);
      const today = isToday(date);

      days.push(
        <TouchableOpacity
          key={day}
          style={[
            styles.dayCell,
            selected && styles.selectedDay,
            today && !selected && styles.todayDay,
          ]}
          onPress={() => handleDatePress(date)}
        >
          <Text
            style={[
              styles.dayText,
              selected && styles.selectedDayText,
              today && !selected && styles.todayText,
            ]}
          >
            {day}
          </Text>
        </TouchableOpacity>
      );
    }

    return days;
  };

  return (
    <View style={styles.container}>
      {/* Header - Only show in expanded mode */}
      {isExpanded && (
        <View style={styles.header}>
          <TouchableOpacity
            onPress={goToPreviousMonth}
            style={styles.navButton}
          >
            <ChevronLeft color={colors.blackText} size={24} />
          </TouchableOpacity>
          <Text style={styles.monthYear}>
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </Text>
          <TouchableOpacity onPress={goToNextMonth} style={styles.navButton}>
            <ChevronRight color={colors.blackText} size={24} />
          </TouchableOpacity>
        </View>
      )}

      {/* Week or Month View */}
      {!isExpanded ? (
        renderWeekView()
      ) : (
        <>
          {/* Day names */}
          <View style={styles.dayNamesContainer}>
            {dayNames.map((name, index) => (
              <View key={index} style={styles.dayNameCell}>
                <Text style={styles.dayNameText}>{name}</Text>
              </View>
            ))}
          </View>

          {/* Calendar grid */}
          <View style={styles.calendarGrid}>{renderMonthView()}</View>
        </>
      )}

      {/* Expand/Collapse Button */}
      <TouchableOpacity
        style={styles.expandButton}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <ChevronUp color={colors.primary} size={24} />
        ) : (
          <ChevronDown color={colors.primary} size={24} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomCalendar;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "12@s",
    padding: "10@s",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20@vs",
  },
  navButton: {
    padding: "5@s",
  },
  monthYear: {
    fontSize: "18@s",
    fontWeight: "bold",
    color: colors.blackText,
  },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "6@s",
    marginBottom: "4@vs",
  },
  weekDayCell: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: "6@s",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "12@vs",
    paddingHorizontal: "8@s",
    minHeight: "70@vs",
  },
  selectedWeekDay: {
    backgroundColor: colors.primary,
  },
  weekDayName: {
    fontSize: "11@s",
    fontWeight: "600",
    color: colors.todoText,
    marginBottom: "6@vs",
  },
  weekDayNumber: {
    fontSize: "10@s",
    fontWeight: "bold",
    color: colors.blackText,
  },
  selectedWeekDayText: {
    color: colors.whiteText,
  },
  dayNamesContainer: {
    flexDirection: "row",
    marginBottom: "10@vs",
  },
  dayNameCell: {
    flex: 1,
    alignItems: "center",
    paddingVertical: "8@vs",
  },
  dayNameText: {
    fontSize: "12@s",
    fontWeight: "600",
    color: colors.todoText,
  },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayCell: {
    width: "14.28%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "5@s",
  },
  selectedDay: {
    backgroundColor: colors.primary,
    borderRadius: "8@s",
  },
  todayDay: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: "8@s",
  },
  dayText: {
    fontSize: "14@s",
    color: colors.blackText,
  },
  selectedDayText: {
    color: colors.whiteText,
    fontWeight: "bold",
  },
  todayText: {
    color: colors.primary,
    fontWeight: "600",
  },
  expandButton: {
    alignItems: "center",
    paddingVertical: "5@vs",
    marginTop: "5@vs",
  },
});
