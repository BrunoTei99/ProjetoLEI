import React from "react";
import { Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen/index";

const app = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HomeScreen />
    </View>
  );
};

export default app;
