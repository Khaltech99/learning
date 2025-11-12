import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import { ChevronRight, Heart, Star } from "lucide-react-native";

const FancyImage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/rio2.jpg")}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <ButtonWrapper style={styles.heart}>
            <Heart color={"white"} />
          </ButtonWrapper>
          <View style={styles.sendDown}>
            <View style={styles.downContent}>
              <Text style={styles.countryText}>Brazil</Text>
              <Text style={styles.cityText}>Rio de Janeiro</Text>
              <View style={styles.review_ratingContainer}>
                <ButtonWrapper style={styles.ratingContainer}>
                  <Star color={"white"} size={20} />
                  <Text style={styles.ratingText}>5.0</Text>
                </ButtonWrapper>
                <Text style={styles.reviewText}>143 reviews</Text>
              </View>
            </View>
            {/* See More Button */}
            <View style={styles.seeMoreContainer}>
              <Text style={styles.seeMoreText}>See more</Text>
              <ButtonWrapper style={styles.iconWrapper}>
                <ChevronRight color={"#444"} size={30} />
              </ButtonWrapper>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FancyImage;

const styles = StyleSheet.create({
  container: {
    width: 295,
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between", // push content to bottom
  },
  content: {
    padding: 15,
    justifyContent: "flex-end",
  },

  heart: {
    backgroundColor: "transparent",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: "100%",
    borderColor: "#ddd",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  downContent: {
    width: "68%",
    marginBottom: 20,
    justifyContent: "flex-end",
  },
  countryText: {
    color: "#f1f1f1",
    fontSize: 14,
    letterSpacing: 0.5,
  },
  cityText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 24,
    letterSpacing: 1,
    marginVertical: 5,
  },
  review_ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "#f1f1f1",
    borderWidth: 1,
    borderRadius: 100,
    paddingVertical: 3,
    paddingHorizontal: 5,
    gap: 4,
  },
  ratingText: {
    color: "#fff",
  },
  reviewText: {
    color: "#fff",
  },

  seeMoreText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontWeight: 500,
  },
  seeMoreContainer: {
    backgroundColor: "rgba(34, 34, 34, 0.7)",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 3,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 100,
    borderRadius: 60,
  },
  iconWrapper: {
    backgroundColor: "white",
    width: 60,
    height: 60,
  },
});
