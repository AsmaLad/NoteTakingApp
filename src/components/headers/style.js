import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

//DIMENSIONS
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const screenHeight = 600;
const screenHeightLarge = 700;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold", //
    marginLeft: 10,
    color: colors.title,
  },
  hint: {
    fontSize: 14,
    marginLeft: 10,
    color: colors.note,
  },
  ProfileIMG: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  backBTN: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
  },
  backIcon: {
    width: 14,
    height: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  backTXT: {
    marginLeft: 4,
    fontSize: 16,
    color: colors.title,
  },
  saveIcon: {
    width: 26,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});
