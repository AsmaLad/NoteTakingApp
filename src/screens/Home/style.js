import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

//DIMENSIONS
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const screenHeight = 600;
const screenHeightLarge = 780;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative',
    // flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  bodyContainer: {
    flex: 0.9,
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
});
