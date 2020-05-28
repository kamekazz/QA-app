import "react-native-gesture-handler";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import { Platform, Text } from "react-native";
import { COLORS } from "../constants/Colors";
import HomeScreen from "../components/screens/HomeScreen";
import IncomingSample from "../components/screens/IncomingSample";

const UserStackNavigator = createStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <UserStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: "white",
      }}
    >
      <UserStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Options" }}
      />
      <UserStackNavigator.Screen
        name="IncomingScreen"
        component={IncomingSample}
        options={{ headerTitle: "Incoming Sample" }}
      />
    </UserStackNavigator.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
