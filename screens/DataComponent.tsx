import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

export default function DataComponent() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputHandler}>
        <View style={styles.content}>
          <Text>Email:</Text>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Email"
            autoCapitalize="none"
            style={styles.input}
            value={email}
          />
        </View>
        <View style={styles.content}>
          <Text>Password: </Text>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Password"
            autoCapitalize="none"
            style={styles.input}
            value={pwd}
          />
        </View>
        <TouchableOpacity style={styles.submitBtn}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    gap: 4,
  },
  inputHandler: {
    gap: 5,
  },
  input: {
    borderWidth: 1,
    padding: 2,
    borderRadius: 3,
    borderColor: "#cbcbd1",
  },
  submitBtn: {
    backgroundColor: "lightblue",
    padding: 4,
    borderRadius: 4,
    width: "100%",
  },
});
