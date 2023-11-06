import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Slot, Stack, Tabs } from "expo-router";
import { ThemeProvider, Theme } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";

const RootLayout = () => {
  const theme: Theme = {
    colors: {
      primary: "#67c4a7",
      background: "white",
      text: "#393f42",
      card: "hsl(240, 25%, 98%)",
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
          // animation: "",
        }}
      />
    </ThemeProvider>
  );
};

export default RootLayout;
