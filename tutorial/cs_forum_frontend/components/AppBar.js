import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";

export default function AppBar(props) {
  onPress = () => {console.log("tests")};
  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={onPress} />
        <Appbar.Content title="Test" />
      </Appbar.Header>
      {props.children}
    </View>
  );
}
