import React from "react";
import { StyleSheet, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "./screens/Home";

export default function App() {
  return (
    <PaperProvider>
      <Home/>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

// const AppNav = createDrawerNavigator(

// );
