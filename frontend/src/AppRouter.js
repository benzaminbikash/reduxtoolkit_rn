import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "./example_1/Product";
import AddtoCart from "./example_1/AddtoCart";
import Product2 from "./example_2/Product2";
import AddtoCart2 from "./example_2/AddtoCart2";

const Stack = createNativeStackNavigator();
const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "none" }}
      >
        <Stack.Screen name="home" component={Product2} />
        <Stack.Screen name="cart" component={AddtoCart2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
