import React, { useEffect } from "react";
import { useContext } from "react";

//NAVIGATION
import { NavigationContainer, DefaultTheme  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import { Home } from "../screens/Home";
import { NoteInfo } from "../screens/Note/index";

//STYLE
import { colors } from "../constants/colors";
import { DarkModeContext } from "../constants/theme";

const Stack = createStackNavigator();

export const AppStack = () => {
  const screenOptions = {
    headerShown: false,
  };
  const { isDarkMode } = useContext(DarkModeContext);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: isDarkMode ? colors.black : colors.onBackground,
      text: isDarkMode ? colors.onBackground : colors.black,
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
       <Stack.Screen
          name="NoteInfo"
          component={NoteInfo}
        />
        {/* <Stack.Screen
          name="EditNoteInfo"
          component={EditNoteInfo}
        />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
