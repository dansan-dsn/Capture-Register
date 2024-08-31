import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";

interface Greetings {
  name: string;
}

const Register: React.FC<Greetings> = ({ name }) => {
  const [text, setText] = useState<string>("");
  return (
    <View>
      <Text>Welcome {name}</Text>
      <View>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Type something"
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        <Button title="Submit" onPress={() => alert(`You typed ${text}`)} />
      </View>
    </View>
  );
};

export default Register;
