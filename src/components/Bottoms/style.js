import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

//DIMENSIONS
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const screenHeight = 600;
const screenHeightLarge = 780;

export const styles = StyleSheet.create({
  addNoteWrapper: {
    display: "flex",
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    bottom: 0,
    right: 0,
    //   width: "45%",
    //   margin: "1.5%",
    //   height: width * 0.45,
  },
  addIcon: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
