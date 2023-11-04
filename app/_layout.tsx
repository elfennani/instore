import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { ThemeProvider, Theme } from "@react-navigation/native";

const RootLayout = () => {
  const theme: Theme = {
    colors: {
      primary: "#67c4a7",
      background: "white",
      text: "#393f42",
      card: "#FAFAFC",
      notification: "#D65B5B",
      border: "#939393",
    },
    dark: false,
  };

  return (
    <ThemeProvider value={theme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ThemeProvider>
  );
};

export default RootLayout;
