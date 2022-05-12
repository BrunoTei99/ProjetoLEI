import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",

    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: "#3B71F3",
    width: "80%",
  },

  container_SECONDARY: {
    borderColor: "green",
    borderWidth: 2,
    width: "45%",
    height: "32%",
  },

  container_TERTIARY: {},

  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 19,
  },

  text_SECONDARY: {
    color: "green",
  },

  text_TERTIARY: {
    color: "white",
  },
});

//Exemplo
/*
          <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
          
*/
