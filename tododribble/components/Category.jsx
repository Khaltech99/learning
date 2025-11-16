import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import Button from "./Button";
import { colors, todoData } from "../utils/colors";
import { FolderOpen, ChevronDown, Check } from "lucide-react-native";
import { ScaledSheet } from "react-native-size-matters";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter out the plus item and get unique categories
  const categories = todoData
    .filter((item) => !item.isPlus)
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.title === item.title)
    );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.categoryContainer}
        onPress={() => setIsDropdownOpen(true)}
      >
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Button
            backgroundColor={
              selectedCategory ? selectedCategory.bg : colors.primary
            }
            borderRadius={10}
          >
            <FolderOpen size={20} fill={"black"} />
          </Button>
          {/* Category Title and Text container */}

          <View style={styles.categoryTitleAndTextContainer}>
            <Text style={styles.categoryTitle}>Category</Text>
            <Text style={styles.categoryText}>
              {selectedCategory ? selectedCategory.title : "Select category"}
            </Text>
          </View>
        </View>

        <ChevronDown color={colors.todoText} size={24} />
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        visible={isDropdownOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsDropdownOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsDropdownOpen(false)}
        >
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownTitle}>Select Category</Text>

            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.dropdownItem}
                onPress={() => handleCategorySelect(category)}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <View
                    style={[
                      styles.colorIndicator,
                      { backgroundColor: category.bg },
                    ]}
                  />
                  <Text style={styles.dropdownItemText}>{category.title}</Text>
                </View>

                {selectedCategory?.id === category.id && (
                  <Check color={colors.primary} size={20} />
                )}
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setIsDropdownOpen(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Category;

const styles = ScaledSheet.create({
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15@s",
    backgroundColor: "#f9fafb",
    borderRadius: "12@s",
    marginVertical: "10@vs",
  },
  categoryTitleAndTextContainer: {
    justifyContent: "center",
  },
  categoryTitle: {
    fontSize: "14@s",
    fontWeight: "600",
    color: colors.blackText,
  },
  categoryText: {
    fontSize: "12@s",
    color: colors.todoText,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: "20@s",
  },
  dropdownContainer: {
    backgroundColor: colors.whiteText,
    borderRadius: "16@s",
    padding: "20@s",
    width: "100%",
    maxWidth: "400@s",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  dropdownTitle: {
    fontSize: "18@s",
    fontWeight: "bold",
    color: colors.blackText,
    marginBottom: "20@vs",
    textAlign: "center",
  },
  dropdownItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15@s",
    borderRadius: "10@s",
    marginBottom: "10@vs",
    backgroundColor: "#f9fafb",
  },
  colorIndicator: {
    width: "32@s",
    height: "32@s",
    borderRadius: "8@s",
  },
  dropdownItemText: {
    fontSize: "16@s",
    fontWeight: "600",
    color: colors.blackText,
  },
  cancelButton: {
    marginTop: "10@vs",
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
});
