import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Details = () => {
  return (
    <View>
      <Text style={styles.Text}>Hours: 2hrs</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  Text: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    marginRight: 20,
  },
});
