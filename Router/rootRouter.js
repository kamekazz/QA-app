import "react-native-gesture-handler";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import { Platform, Text } from "react-native";
import { COLORS } from "../constants/Colors";
import HomeScreen from "../components/screens/HomeScreen";
import IncomingSample from "../components/screens/IncomingSample";
import AddModel from "../components/screens/IncomingSample/AddModel";

const UserStackNavigator = createStackNavigator();
const IncomingSampleStack = createStackNavigator();

const IncomingSampleNavigator = () => (
  <IncomingSampleStack.Navigator>
    <IncomingSampleStack.Screen
      name="IncomingScreen"
      component={IncomingSample}
      options={{ headerTitle: "Incoming Sample" }}
    />
    <IncomingSampleStack.Screen
      name="AddModel(1)"
      component={AddModel}
      options={{ headerShown: false }}
    />
  </IncomingSampleStack.Navigator>
);

export const RootNavigator = () => (
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
        name="IncomingSampleNavigator"
        component={IncomingSampleNavigator}
        options={{ headerShown: false }}
      />
    </UserStackNavigator.Navigator>
  </NavigationContainer>
);
