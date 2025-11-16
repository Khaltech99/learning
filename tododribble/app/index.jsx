import {
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useMemo, useCallback } from "react";
import Wrapper from "../components/Wrapper";
import { ScaledSheet } from "react-native-size-matters";
import { colors, todoData } from "./../utils/colors";
import {
  Briefcase,
  CheckCircle,
  Circle,
  Flag,
  Plus,
  Search,
  Star,
} from "lucide-react-native";
import Card from "../components/Card";
import Button from "@/components/Button";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AddTaskBottomSheet from "../components/AddTaskBottomSheet";

const iconList = ["", Star, Briefcase, Flag, CheckCircle, Circle];

const Index = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["50%", "75%"], []);

  const handleOpenBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleCloseBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Wrapper style={styles.container}>
        <StatusBar barStyle={"light-content"} />

        <View style={{ flex: 1 }}>
          {/* search section */}
          <View style={styles.topContainer}>
            <View style={styles.search}>
              <Search color={colors.whiteText} />
              <TextInput
                style={styles.input}
                placeholder="Search by group or task ..."
                placeholderTextColor={colors.whiteText}
              />
            </View>
            {/* view all container */}
            <View style={styles.viewAllcontainer}>
              <Text style={styles.viewAllText}>My groups</Text>

              <TouchableOpacity>
                <Text style={styles.viewAllBtn}>View all</Text>
              </TouchableOpacity>
            </View>
            {/* GRID */}
            <FlatList
              data={todoData}
              keyExtractor={(item) => item.id}
              numColumns={2}
              scrollEnabled={false}
              contentContainerStyle={{ paddingHorizontal: 0 }}
              renderItem={({ item, index }) => {
                const isLeftColumn = index % 2 === 0;
                return (
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      marginRight: isLeftColumn ? 10 : 0,
                      marginLeft: isLeftColumn ? 0 : 10,
                      marginVertical: 10,
                    }}
                  >
                    <Card item={item} backgroundColor={item.bg} index={index} />
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View style={styles.bottomContainer}>
            {/* bottom title */}
            <View style={styles.bottomHeader}>
              <Text style={styles.bottomHeaderTitle}>Today</Text>
              <TouchableOpacity onPress={handleOpenBottomSheet}>
                <Button backgroundColor={colors.primary} borderRadius={8}>
                  <Plus color={colors.whiteText} />
                </Button>
              </TouchableOpacity>
            </View>
            <Text style={styles.bottomHeaderText}>8 tasks</Text>

            {/* LISTS OF TODAY TODO */}
            <FlatList
              data={todoData}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 20 }}
              renderItem={({ item, index }) => {
                const IconComponent = iconList[index % iconList.length];

                return (
                  <>
                    {!item.isPlus && (
                      <View style={styles.bottomTodoLists}>
                        <Button backgroundColor={item.bg} borderRadius={8}>
                          <IconComponent
                            color={colors.blackText}
                            size={20}
                            fill={"black"}
                          />
                        </Button>
                        <View style={styles.todoItemsContainer}>
                          <Text style={styles.bottomTodoListTitle}>
                            {item.todo}
                          </Text>
                          <Text style={styles.bottomTodoListText}>
                            {item.sharedWith}
                          </Text>
                        </View>
                      </View>
                    )}
                  </>
                );
              }}
            />
          </View>
        </View>

        {/* Bottom Sheet */}
        <AddTaskBottomSheet
          bottomSheetRef={bottomSheetRef}
          snapPoints={snapPoints}
          onClose={handleCloseBottomSheet}
        />
      </Wrapper>
    </GestureHandlerRootView>
  );
};

export default Index;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  topContainer: {
    paddingHorizontal: "20@s",
    paddingVertical: "20@vs",
  },
  search: {
    padding: "10@s",
    backgroundColor: colors.lightBg,
    borderRadius: "10@ms",
    flexDirection: "row",
    alignItems: "center",
    gap: "10@s",
    marginBottom: "10@vs",
  },
  input: {
    flex: 1,
    color: colors.whiteText,
    fontWeight: "bold",
  },
  viewAllcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "5@vs",
  },
  viewAllText: {
    color: colors.whiteText,
    fontWeight: "500",
    fontSize: "20@s",
  },
  viewAllBtn: {
    color: colors.whiteText,
    fontSize: "16@s",
  },
  bottomContainer: {
    backgroundColor: colors.whiteText,
    padding: "15@s",
    borderTopRightRadius: "20@s",
    borderTopLeftRadius: "20@s",
    width: "100%",
    flex: 1,
  },
  bottomHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomHeaderTitle: {
    fontSize: "20@s",
    fontWeight: "bold",
  },
  bottomHeaderText: {
    color: colors.todoText,
    fontWeight: "700",
    marginBottom: "15@vs",
  },
  bottomTodoLists: {
    flexDirection: "row",
    alignItems: "center",
    gap: "15@s",
    marginBottom: "15@vs",
  },
  todoItemsContainer: {},
  bottomTodoListTitle: {
    color: colors.blackText,
    fontWeight: "bold",
    fontSize: "14@s",
  },
  bottomTodoListText: {
    color: colors.todoText,
    fontWeight: "500",
    fontSize: "12@s",
  },
});
