import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Register from "./screens/Register";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Register name={"Dansan"} />
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Decrement" onPress={() => setCount(count - 1)} />
    </View>
  );
};

export default App;

// App: React.FC
// interface Props {
// name: string;
// }
//
// const App: React.FC<Props> = ({name}) =>
