import { Text, TouchableOpacity, View } from 'react-native';

//NAVIGATION
import { useNavigation } from "@react-navigation/native";

//style
import { styles } from './style';

export const Note =({ note }) => {
    const navigation = useNavigation();

    const openNote = () => {
        navigation.navigate('EditNoteInfo', { id: note.id })
    }
    return (
        <View style={[styles.container, {flexDirection:'row'}]}>
        <TouchableOpacity style={styles.noteWrapper} onPress={openNote}>
            <Text style={styles.title}>{note.title}</Text>
            <Text numberOfLines={9} style={styles.content}>{note.content}</Text>
            <Text style={styles.date}>{note.date}</Text>
        </TouchableOpacity>
        </View>

    );
}

