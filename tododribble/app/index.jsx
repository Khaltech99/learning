import {
  Dimensions,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Wrapper from "../components/Wrapper";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "./../utils/colors";
import { Search } from "lucide-react-native";
import Card, { todoData } from "../components/Card";

const index = () => {
  return (
    <View style={styles.container}>
      <Wrapper>
        {/* search section */}
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
        {/* CAROUSEL */}

        <FlatList
          data={todoData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 0 }}
          renderItem={({ item, index }) => {
            const isLeftColumn = index % 2 === 0; // left column
            return (
              <TouchableOpacity
                style={{
                  flex: 1,
                  marginRight: isLeftColumn ? 10 : 0,
                  marginLeft: isLeftColumn ? 0 : 10,
                  marginVertical: 10,
                }}
              >
                <Card item={item} backgroundColor={item.bg} />
              </TouchableOpacity>
            );
          }}
        />
      </Wrapper>
    </View>
  );
};

export default index;

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: "20@s",
    paddingVertical: "20@vs",
    backgroundColor: colors.primary,
    height: "100%",
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
});
