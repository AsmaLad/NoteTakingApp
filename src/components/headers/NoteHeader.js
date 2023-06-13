import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

//STYLE
import { styles } from "./style";

//NAVIGATION
import { useNavigation } from "@react-navigation/native";

export const NoteHeader = (props) => {
  const {  } = props;
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack()
}
  return (
    <View style={styles.container}>

      <View >
        <TouchableOpacity onPress={goBack} style={styles.backBTN}>
          <Image
            source={require("../../assets/images/arrow-left.png")}
            style={styles.backIcon}
          />
          <Text style={styles.backTXT}>Back</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require("../../assets/images/save.png")}
        style={styles.saveIcon}
      />
    </View>
  );
};
