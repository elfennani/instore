import React from "react";
import { Redirect, Stack } from "expo-router";
import { ThemeProvider, Theme } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/services/queryClient";

const RootLayout = () => {
  const theme: Theme = {
    colors: {
      primary: "#67c4a7",
      background: "white",
      text: "#393f42",
      card: "hsl(240, 25%, 98%)",
      notification: "#D65B5B",
      border: "#d5d5d5",
    },
    dark: false,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={theme}>
        <Redirect href={"/account"} />
        <Stack
          screenOptions={{
            headerShown: false,
            // animation: "",
          }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
