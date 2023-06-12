import React, { useEffect } from "react";

//NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//SCREENS
import Home from "../screens/Home";


const Stack = createStackNavigator();

export const AppStack = () => {

  return (
    // <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //     // contentStyle: styles.stackContainer,
    //   }}
    //   initialRouteName="HomeScreen
    //   ">
    //   <Stack.Screen name="HomeScreen" component={HomeScreen} />

    // </Stack.Navigator>

    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   headerLeft: () => <LeftHeaderHome />,
          //   headerRight: () => <RightHeaderHome />,
          // }}
        />
        {/* <Stack.Screen
          name="NoteInfo"
          component={NoteInfo}
          // options={({ navigation }) => ({
          //   headerLeft: () => <LeftHeaderNoteInfo navigation={navigation} />,
          //   headerRight: () => <Feather style={{marginRight:10}} name="save" size={24} color="black" />
          //   ,
          // })}
        />
        <Stack.Screen
          name="EditNoteInfo"
          component={EditNoteInfo}
          // options={({ navigation }) => ({
          //   headerLeft: () => <LeftHeaderNoteInfo navigation={navigation} />,
          //   headerRight: () => <Feather style={{marginRight:10}} name="save" size={24} color="black" />
          //   ,
          // })}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
