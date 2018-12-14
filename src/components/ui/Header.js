import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontSize: 100,
    fontWeight: "500",
    color: "#e67e22"
  }
});

const Header = ({ title }) => <Text style={styles.header}>{title}</Text>;

export default Header;
