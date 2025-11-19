import { colors } from "../constants/color";

export const cardData = [
  { amount: "27,000", kobo: 90 },
  { amount: "20,000", kobo: 99 },
  { amount: "30,000", kobo: 91 },
];

export const splitsData = [
  {
    title: "House Rent",
    icon: require("../assets/images/house.png"),
    backgroundColor: colors.customLemon,
    members: 5,
    amount: 120000,
    dueDate: "Due on August 24th, 2025",
  },
  {
    title: "Daniel’s Wedding",
    icon: require("../assets/images/ring.png"),
    backgroundColor: colors.customPink,
    members: 7,
    amount: 203000,
    dueDate: "Due on September 15th, 2025",
  },
  {
    title: "Abuja Trip",
    icon: require("../assets/images/bus.png"),
    backgroundColor: colors.customPink,
    members: 9,
    amount: 200000,
    dueDate: "Due on October 1st, 2025",
  },
  {
    title: "We need food",
    icon: require("../assets/images/laptop.png"),
    backgroundColor: colors.customLightBlue,
    members: 12,
    amount: 320000,
    dueDate: "Due on October 1st, 2025",
  },
];
