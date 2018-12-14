import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#8e44ad"
  },
  title: {
    padding: 10,
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500"
  }
});

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
