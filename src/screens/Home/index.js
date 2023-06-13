import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

//NAVIGATION
import { useNavigation } from "@react-navigation/native";

//REDUX
import { useSelector } from "react-redux";
import {
  selectAllNotes,
  selectNoteById,
} from "../../store/selectors/noteSelectors";

//COMPONENETS
import { HomeHeader } from "../../components/headers/HomeHeader";
import { Addnote } from "../../components/AddNote";
import { Note } from "../../components/Note";
import { Bottom } from "../../components/Bottoms/Bottom";

//STYLE
import { styles } from "./style";
import { useContext } from "react";
import { DarkModeContext } from '../../constants/theme';
import { colors } from "../../constants/colors";

export const Home = () => {
  const notes = useSelector(selectAllNotes);
  const navigation = useNavigation();
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <View style={[styles.container, { backgroundColor:isDarkMode ?  colors.black : colors.onBackground ,
    }]}>
      <StatusBar style="auto" />
      <View>
        <HomeHeader dark={!isDarkMode}/>
      </View>
      <View style={styles.bodyContainer}>
        <Addnote navigation={navigation} />
        {notes.map((note) => (
          <Note key={note.id} note={note} navigation={navigation} />
        ))}
      </View>
      <Bottom navigate={toggleDarkMode} dark={!isDarkMode}/>
    </View>
  );
};
