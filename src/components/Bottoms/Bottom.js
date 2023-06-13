import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";

export const Bottom = ({ navigate, dark }) => {
  // const navigation = useNavigation();
  //   const navigate = () => {
  //     navigation.navigate("NoteInfo");
  //   };
  return (
    <View style={{ width: "95%" }}>
      <TouchableOpacity style={styles.addNoteWrapper} onPress={navigate}>
        <View style={styles.addIcon}>
          {dark ? (
            <Image source={require("../../assets/images/dark.png")} />
          ) : (
            <Image source={require("../../assets/images/dark.png")} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
