import { Text } from "react-native";

export default function GeistText({ style, ...props }) {
  return <Text {...props} style={[{ fontFamily: "Geist-Regular" }, style]} />;
}
