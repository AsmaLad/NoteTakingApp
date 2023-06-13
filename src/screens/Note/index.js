import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useDispatch, useSelector } from "react-redux";
// import { selectAllNotes, selectNoteById } from '../store/selectors/noteSelectors';
import { useEffect, useState } from "react";
// import Note from '../components/Note';
// import { Feather } from '@expo/vector-icons';
import { addNote } from "../../store/reducers/noteSlice";
import { styles } from "./style";
import { NoteHeader } from "../../components/headers/NoteHeader";

export const NoteInfo = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const makeid = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };

  const handleAddNote = () => {
    dispatch(
      addNote({
        id: makeid(5),
        title: title,
        content: content,
        date: new Date().toLocaleDateString(),
      })
    );
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <NoteHeader />
      </View>
      <View style={styles.bodyContainer} >
        <TextInput
          style={styles.titleInput}
          placeholder="Enter title of note..."
          onChangeText={setTitle}
          value={title}
        />
        {/* <TextInput
          multiline={true}
          placeholder="this is your area this is your area this is your area this is your area this is your area this is your area this is your area "
          style={styles.contentInput}
          onChangeText={setContent}
          value={content}
        /> */}
      </View>

      <TouchableOpacity style={styles.saveBTN} onPress={handleAddNote}>
        {/* <Feather name="save" size={35} color="white" /> */}
      </TouchableOpacity>
    </View>
  );
};
