import { colors } from "../constants/color";
import PadLock from "../assets/icons/password.svg";
import Support from "../assets/icons/support.svg";
import Card from "../assets/icons/card.svg";
import Refer from "../assets/icons/refer.svg";
import Logout from "../assets/icons/logout.svg";

// Card Data
export const cardData = [
  { amount: "27,000", kobo: 90 },
  { amount: "20,000", kobo: 99 },
  { amount: "30,000", kobo: 91 },
];

// Splits Data
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
    title: "Laptop for David",
    icon: require("../assets/images/laptop.png"),
    backgroundColor: colors.customLemon,
    members: 12,
    amount: 300000,
    dueDate: "Due on October 1st, 2025",
  },
  {
    title: "We need food",
    icon: require("../assets/images/laptop.png"),
    backgroundColor: colors.customLightBlue,
    members: 12,
    amount: 350000,
    dueDate: "Due on October 1st, 2025",
  },
  {
    title: "Picnic with the boys",
    icon: require("../assets/images/alcohol.png"),
    backgroundColor: colors.customOrange,
    members: 12,
    amount: 420000,
    dueDate: "Due on October 1st, 2025",
  },
  {
    title: "Gaming Console",
    icon: require("../assets/images/pad.png"),
    backgroundColor: colors.customLemon,
    members: 12,
    amount: 500000,
    dueDate: "Due on October 1st, 2025",
  },
  {
    title: "Dinner Party",
    icon: require("../assets/images/pad.png"),
    backgroundColor: colors.customPink,
    members: 12,
    amount: 320000,
    dueDate: "Due on October 1st, 2025",
  },
  {
    title: "Graduation",
    icon: require("../assets/images/pad.png"),
    backgroundColor: colors.customOrange,
    members: 12,
    amount: 340000,
    dueDate: "Due on October 1st, 2025",
  },
  {
    title: "Graduation",
    icon: require("../assets/images/pad.png"),
    backgroundColor: colors.customLightBlue,
    members: 12,
    amount: 350000,
    dueDate: "Due on October 1st, 2025",
  },
  {
    title: "Graduation",
    icon: require("../assets/images/pad.png"),
    backgroundColor: colors.customLemon,
    members: 13,
    amount: 390000,
    dueDate: "Due on October 1st, 2025",
  },
];

// Splits user images
export const splitUserData = [
  { user: "daniel", image: require("../assets/images/bushyman.jpg") },
  { user: "Steph", image: require("../assets/images/lollypopman.jpg") },
  { user: "John", image: require("../assets/images/earringman.jpg") },
  { user: "Mary", image: require("../assets/images/flowergirl.jpg") },
  { user: "Azeez", image: require("../assets/images/brownskinguy.jpg") },
  { user: "David", image: require("../assets/images/neckchainman.jpg") },
  { user: "Isah", image: require("../assets/images/maninblack.jpg") },
];

// Slider Images
export const slideImages = [
  {
    busImage: require("../assets/images/bus.png"),
    backgroundColor: colors.customLemon,
  },
  {
    homeImage: require("../assets/images/supermarket.png"),
    backgroundColor: colors.customOrange,
  },
  {
    laptopImage: require("../assets/images/laptop.png"),
    backgroundColor: colors.customPink,
  },
];

export const settings = [
  {
    icon: PadLock,
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    title: "Password",
    text: "Have a change of password here",
  },
  {
    icon: Support,
    backgroundColor: "rgba(233, 143, 20, 0.1)",
    title: "Support",
    text: "Contact our support team here",
  },
  {
    icon: Card,
    backgroundColor: "rgba(113, 58, 139, 0.1)",
    title: "Saved Cards",
    text: "See your saved cards here",
  },
  {
    icon: Refer,
    backgroundColor: "rgba(14, 160, 41, 0.1)",
    title: "Refer & Earn",
    text: "Refer someone and earn money",
  },
  {
    icon: Logout,
    backgroundColor: "rgba(230, 60, 60, 0.1)",
    title: "Log Out",
    text: "Signout of your account securely",
  },
];
