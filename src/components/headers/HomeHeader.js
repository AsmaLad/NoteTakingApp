import { Image, Text, View } from "react-native";
import React from "react";

//STYLE
import { styles } from "./style";


export const HomeHeader = (props) => {
  const {} = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Note.d</Text>
        <Text style={styles.hint}>Enjoy note taking with friends</Text>
      </View>

      <Image
        source={require("../../assets/images/profile.png")}
        style={styles.ProfileIMG}
      />
    </View>
  );
};
