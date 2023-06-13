import { Text, View, TouchableOpacity, Image } from "react-native";

//NAVIGATION
import { useNavigation } from "@react-navigation/native";

//STYLE
import { styles } from "./style";

export const Addnote =() => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate("NoteInfo");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addNoteWrapper} onPress={navigate}>
        <View style={styles.addIcon}>
          <Image
            source={require("../assets/images/add.png")}
          />
        </View>
        <Text style={styles.label}>New note</Text>
      </TouchableOpacity>
    </View>
  );
}
