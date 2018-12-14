import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import Dog from "./src/components/Dog";
import Header from "./src/components/ui/Header";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Doggo !" />
        <Dog />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1"
  }
});
