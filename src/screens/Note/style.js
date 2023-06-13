import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

//DIMENSIONS
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const screenHeight = 600;
const screenHeightLarge = 780;

export const styles = StyleSheet.create({
  container: {
    // height: "100%",
    // position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: colors.onBackground,
    paddingTop : 10
  },
  bodyContainer: {
    flex: 0.9,
    paddingHorizontal: 16,
    left:16,
  },
  titleInput: {
    width: width,
    // height: 100,
    fontSize: 48,
    color:colors.gray,
  },
  contentInput: {
    width: "100%",
    textAlignVertical: "top",
    fontSize: 30,
  },
  saveBTN: {
    position: "absolute",
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    bottom: 15,
    right: 15,
    borderRadius: 50,
    backgroundColor: "grey",
    zIndex: 100,
    elevation: 100,
  },
});
