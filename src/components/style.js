import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

//DIMENSIONS
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const screenHeight = 600;
const screenHeightLarge = 780;

export const styles = StyleSheet.create({
    container: {
    // backgroundColor: "red",
    width: width * 0.9,
    // height: height,
    paddingTop: 10,
    // position:'absolute',
    flexDirection:'row'
  },
    addNoteWrapper: {
    //   display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "45%",
      margin: "1.5%",
      height: width * 0.45,
      borderColor: colors.BlueLight,
      backgroundColor: colors.BlueLightbg,
      borderStyle: "solid",
      borderWidth: 1,
      borderRadius: 8,
    },
    addIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    label: { 
        paddingTop: 5,
        color: colors.DarkBlue, 
        fontSize: 14
     },


     noteWrapper: {
        // display: 'flex',
        width: '45%',
        height: width * 0.45,
        borderColor: colors.gray,
        backgroundColor: '#BBF3F5',
        borderStyle: 'solid',
        borderWidth: 1,
        margin: '1.5%',
        borderRadius: 6
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10
    },
    content: {
        fontSize: 14,
        marginLeft: 10,
        color: 'grey'
    },
    date: {
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 10,
        color: 'black'
    }
});
