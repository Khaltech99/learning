import { Image, View, FlatList } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import IconButton from "../../components/IconButton";
import Bell from "../../assets/icons/bell.svg";
import GeistText from "../../components/GeistText";
import { colors } from "../../constants/color";
import CoverPassword from "../../assets/icons/coverpassword.svg";
import Plus from "../../assets/icons/formkit_add.svg";
import PieChart from "../../assets/icons/split.svg";
import CaretRight from "../../assets/icons/caretright.svg";
import CaretRightBlack from "../../assets/icons/caretrightnew.svg";
import { cardData } from "../../utils/data";
import Splits from "../../components/Splits";

// card data contains amount and kobo properties
const HomeTab = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const cardWidth = 263; // Width of each card
    const gap = 15; // Gap between the cards
    const index = Math.round(scrollPosition / (cardWidth + gap));
    setActiveCardIndex(index);
  };

  const renderCard = ({ item }) => (
    <View style={styles.debtCardContainer}>
      <IconButton
        backgroundColor={colors.customGrayBg}
        style={styles.debtCardContainerBtn}
      >
        <GeistText style={styles.debtCardText}>you owe</GeistText>
      </IconButton>
      <View style={styles.debtCardAmountContainer}>
        <GeistText style={styles.debtCardAmount}>₦</GeistText>
        <GeistText style={styles.debtCardAmount}>{item.amount}</GeistText>
        <GeistText style={styles.debtCardAmountKobo}>.{item.kobo}</GeistText>
      </View>
      <IconButton
        style={{ justifyContent: "center", alignItems: "center" }}
        backgroundColor="transparent"
      >
        <GeistText
          style={[
            { color: colors.customBlackOpacity60 },
            styles.viewAllExpenses,
          ]}
        >
          View all expenses
        </GeistText>
        <CaretRightBlack width={10} height={10} />
      </IconButton>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Avatar Section */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            source={require("../../assets/images/headphoneguy.jpg")}
            style={styles.avatar}
          />
          <View style={styles.headerContainer}>
            <GeistText style={styles.headerTitle}>Hi, Ikeh David</GeistText>
            <View style={styles.headerGreetingContainer}>
              <GeistText style={styles.headerGreeting}>
                Good Morning!!!
              </GeistText>
              <Image
                source={require("../../assets/images/rocket.png")}
                style={styles.rocket}
              />
            </View>
          </View>
        </View>

        <IconButton
          backgroundColor={colors.customWhite}
          style={styles.bellContainer}
        >
          <Bell width={20.27} height={20.27} />
        </IconButton>
      </View>

      {/*Total Balance Section */}
      <View style={styles.totalBalanceContainer}>
        <GeistText style={styles.totalBalance}>Total Balance</GeistText>
        <CoverPassword />
      </View>

      {/* Balance section */}
      <View style={styles.balanceContainer}>
        <GeistText style={styles.balanceCurrency}>₦</GeistText>

        <GeistText style={styles.balanceAmount}>134,000</GeistText>
        <GeistText style={styles.balanceKobo}>.98</GeistText>
      </View>

      {/* Debt Section */}
      <View style={styles.debtContainer}>
        <GeistText style={styles.debtText}>You owe {""}</GeistText>
        <GeistText style={styles.debtAmount}>₦60,000{""}</GeistText>
        <GeistText style={styles.debtText}> (3 splits)</GeistText>
      </View>

      {/* Button Section */}
      <View style={styles.btnContainer}>
        <IconButton
          style={styles.btnAddMoney}
          backgroundColor={colors.customWhite}
        >
          <Plus />
          <GeistText style={styles.btnTextAddMoney}>Add Money</GeistText>
        </IconButton>
        <IconButton style={styles.btnCreateSplit}>
          <PieChart />
          <GeistText style={styles.btnTextCreateSplit}>Create Split</GeistText>
        </IconButton>
      </View>

      {/* OverView Section */}
      <View style={styles.overviewContainer}>
        <GeistText style={styles.overviewText}>
          Little overview for you
        </GeistText>
        <IconButton backgroundColor="transparent">
          <GeistText style={styles.overviewMore}>View more</GeistText>
          <CaretRight />
        </IconButton>
      </View>

      {/* Debit Card Section with FlatList */}
      <View>
        <FlatList
          ref={flatListRef}
          data={cardData}
          renderItem={renderCard}
          keyExtractor={(item, index) => index.toString()}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.flatListContent}
          style={styles.flatList}
          ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
          removeClippedSubviews={false}
          horizontal
        />
        {/* line section */}
        <View style={styles.linesContainer}>
          {cardData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.line,
                {
                  backgroundColor:
                    activeCardIndex === index
                      ? colors.customBlue
                      : colors.customGrayBg,
                },
              ]}
            />
          ))}
        </View>
      </View>

      {/* Ongoing Splits section  */}

      <View style={styles.overviewContainer}>
        <GeistText style={styles.overviewText}>Ongoing Splits</GeistText>
        <IconButton backgroundColor="transparent">
          <GeistText style={styles.overviewMore}>View more</GeistText>
          <CaretRight />
        </IconButton>
      </View>
      <Splits />
    </SafeAreaView>
  );
};

export default HomeTab;

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: "20@s",
    flex: 1,
    backgroundColor: colors.customWhite,
  },

  // AVATAR SECTION CSS
  header: {
    flexDirection: "row",
    gap: "10@s",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20@vs",
  },
  avatar: {
    width: "40@s",
    height: "40@vs",
    borderRadius: "100@s",
  },
  headerContainer: {
    gap: "4@s",
  },
  headerTitle: {
    fontSize: "15@ms",
    lineHeight: "100%",
    color: colors.customBlack,
    fontWeight: 500,
  },
  headerGreetingContainer: {
    flexDirection: "row",
    gap: "2@s",
  },
  headerGreeting: {
    fontSize: "12@ms",
    lineHeight: "100%",
    color: colors.customBlackOpacity60,
  },
  rocket: {
    width: "12@s",
    height: "12@vs",
  },
  bellContainer: {
    padding: "20@s",
    paddingHorizontal: 22,
    elevation: "4@s",
    borderRadius: "100%",
    width: "38@s",
    height: "38@vs",
  },

  // TOTAL BALANCE SECTION CSS
  totalBalanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: "5@s",
    marginBottom: "10@vs",
  },
  totalBalance: {
    fontSize: "13@s",
    lineHeight: "100%",
    color: colors.customBlackOpacity60,
    fontWeight: 500,
  },

  // BALANCE SECTION CSS
  balanceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    letterSpacing: "5%",
    marginBottom: "10@vs",
  },
  balanceCurrency: {
    fontSize: "32@ms",
    marginRight: "8@s",
    letterSpacing: 5,
  },
  balanceAmount: {
    fontSize: "32@ms",
    lineHeight: "100%",
    color: colors.customBlack,
    fontWeight: 500,
  },
  balanceKobo: {
    fontSize: "20@ms",
    lineHeight: "100%",
    color: colors.customBlackOpacity,
    fontWeight: 400,
  },

  // DEBT SECTION CSS
  debtContainer: {
    flexDirection: "row",
    marginBottom: "20@vs",
  },
  debtText: {
    fontSize: "11@ms",
    lineHeight: "100%",
    color: colors.customBlackOpacity60,
    fontWeight: 500,
  },
  debtAmount: {
    fontSize: "11@ms",
    lineHeight: "100%",
    color: colors.customBlack,
    fontWeight: 500,
  },

  // BUTTON SECTION CSS
  btnContainer: {
    flexDirection: "row",
    gap: "15@s",
    marginBottom: "25@vs",
  },

  btnAddMoney: {
    paddingVertical: "12@vs",
    width: "130@s",
    borderWidth: 1,
    borderColor: colors.customGrayBg,
  },
  btnCreateSplit: {
    paddingVertical: "12@vs",
    width: "130@s",
  },
  btnTextAddMoney: {
    color: colors.customBlack,
    fontSize: "15@ms",
    lineHeight: "100%",
    fontWeight: 500,
  },
  btnTextCreateSplit: {
    color: colors.customTextwhite,
    fontSize: "15@ms",
    lineHeight: "100%",
    fontWeight: 500,
  },

  // OVERVIEW CSS
  overviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20@vs",
  },
  overviewText: {
    color: colors.customBlack,
    fontSize: "14@ms",
    lineHeight: "100%",
    fontWeight: 500,
  },
  overviewMore: {
    fontSize: "12@ms",
    color: colors.customBlue,

    lineHeight: "100%",
    fontWeight: 500,
  },

  viewAllExpenses: {
    color: colors.customBlackOpacity60,
  },

  // FLATLIST CSS
  flatList: {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
  },
  flatListContent: {
    paddingRight: "20@s",
    paddingLeft: 0,
    padding: 0,
    paddingBottom: 0,
  },

  // DEBT CARD SECTION
  debtCardContainer: {
    width: "263@s",
    height: "126@vs",
    borderRadius: "18.48@s",
    borderWidth: "1.23@s",
    borderColor: colors.customGrayBg,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: "15@vs",
    gap: "10@vs",
    marginBottom: "15@vs",
  },
  debtCardText: {
    color: colors.customBlack,
    fontSize: "8@ms",
    lineHeight: "100%",
    fontWeight: 500,
  },
  debtCardContainerBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  debtCardAmountContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderColor: colors.customBlackOpacity,
  },
  debtCardAmount: {
    color: colors.customBlack,
    fontSize: "20@ms",
    lineHeight: "100%",
    fontWeight: 500,
  },
  debtCardAmountKobo: {
    color: colors.customBlackOpacity,
    fontSize: "20@ms",
    lineHeight: "100%",
    fontWeight: 500,
  },

  // LINES CSS
  linesContainer: {
    flexDirection: "row",
    gap: "3@s",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "25@vs",
  },

  line: {
    width: "20@s",
    height: "2@vs",
    backgroundColor: colors.customBlue,
    borderRadius: "5@s",
  },
});
