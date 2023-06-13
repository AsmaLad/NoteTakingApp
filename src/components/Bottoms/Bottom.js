import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./style";

export const Bottom = ({ navigate, dark }) => {
  return (
    <View style={{ width: "95%" }}>
      <TouchableOpacity style={styles.addNoteWrapper} onPress={navigate}>
        <View style={styles.addIcon}>
          {dark ? (
            <Image source={require("../../assets/images/dark.png")} />
          ) : (
            <Image source={require("../../assets/images/light.png")} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
