import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../utils/colors";
import { X } from "lucide-react-native";
import Calendar from "./Calendar";
import Time from "./Time";
import Category from "./Category";

const AddTaskBottomSheet = ({ bottomSheetRef, snapPoints, onClose }) => {
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1} // Start closed
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backgroundStyle={styles.bottomSheetBackground}
      handleIndicatorStyle={styles.handleIndicator}
    >
      <BottomSheetView style={styles.bottomSheetContent}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={onClose}>
            <X color={colors.blackText} size={25} />
          </TouchableOpacity>
          <Text style={styles.bottomSheetTitle}>Add task</Text>
        </View>

        <TextInput
          style={styles.bottomSheetInput}
          placeholder="Title"
          placeholderTextColor={colors.todoText}
          multiline
          numberOfLines={2}
        />

        <TextInput
          style={[styles.bottomSheetInput, styles.textArea]}
          placeholder="Notes"
          placeholderTextColor={colors.todoText}
        />
        {/* CALENDER SEGMENT */}
        <Calendar />
        <Time />
        <Category />
        {/* TIME SEGMENT */}

        <View style={styles.bottomSheetButtons}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              // Add your task creation logic here
              console.log("Task added");
              onClose();
            }}
          >
            <Text style={styles.addButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default AddTaskBottomSheet;

const styles = ScaledSheet.create({
  bottomSheetBackground: {
    backgroundColor: colors.whiteText,
    borderRadius: "20@s",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "100@s",
    width: "100%",
  },
  handleIndicator: {
    backgroundColor: colors.todoText,
    width: "40@s",
  },
  bottomSheetContent: {
    padding: "20@s",
    paddingVertical: "10@s",
    flex: 1,
  },
  bottomSheetTitle: {
    fontSize: "20@s",
    fontWeight: "bold",
    color: colors.blackText,
    marginBottom: "20@vs",
    textAlign: "center",
  },
  bottomSheetInput: {
    backgroundColor: "#f5f5f5",
    padding: "20@s",
    borderRadius: "10@s",
    fontSize: "16@s",
    marginBottom: "15@vs",
    color: colors.blackText,
    fontWeight: "400",
  },
  calendarContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: "8@s",
    borderRadius: "10@s",
  },
  calendarTitle: {
    color: colors.blackText,
    fontWeight: "bold",
  },
  calendarText: {
    color: colors.todoText,
  },
  textArea: {
    height: "100@vs",
    textAlignVertical: "top",
  },
  bottomSheetButtons: {
    flexDirection: "row",
    gap: "10@s",
    marginTop: "20@vs",
  },
  cancelButton: {
    flex: 1,
    padding: "15@s",
    borderRadius: "10@s",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: "16@s",
    fontWeight: "600",
    color: colors.blackText,
  },
  addButton: {
    flex: 1,
    padding: "15@s",
    borderRadius: "10@s",
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  addButtonText: {
    fontSize: "16@s",
    fontWeight: "600",
    color: colors.whiteText,
  },
});
