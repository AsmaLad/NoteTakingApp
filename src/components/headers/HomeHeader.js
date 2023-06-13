import { Image, Text, View } from "react-native";
import React from "react";

//STYLE
import { styles } from "./style";
import { colors } from "../../constants/colors";


export const HomeHeader = (props) => {
  const {dark} = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.title, { color: dark ? colors.title: colors.onBackground,}]}>Note.d</Text>
        <Text style={[styles.hint, { color: dark ? colors.note: colors.onBackground,}]}>Enjoy note taking with friends</Text>
      </View>

      <Image
        source={require("../../assets/images/profile.png")}
        style={styles.ProfileIMG}
      />
    </View>
  );
};
