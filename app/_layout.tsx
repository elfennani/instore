import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { ThemeProvider, Theme } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";

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
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarButton: ({ children, onPress }) => {
            return (
              <TouchableOpacity
                onPress={onPress}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  // gap: 16,
                  paddingTop: 8,
                  paddingBottom: 16,
                }}
                activeOpacity={0.8}
              >
                {children}
              </TouchableOpacity>
            );
          },
          tabBarHideOnKeyboard: true,
          tabBarIconStyle: {
            // flex: 0,
          },
          tabBarStyle: {
            height: 80,
            borderColor: "#F0F2F1",
            backgroundColor: "white",
            elevation: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) =>
              focused ? (
                <Iconify icon="mdi:home" color={color} size={28} />
              ) : (
                <Iconify icon="mdi-light:home" color={color} size={28} />
              ),
          }}
        />
        <Tabs.Screen
          name="wishlist"
          options={{
            title: "Wishlist",
            tabBarIcon: ({ color, focused }) =>
              focused ? (
                <Iconify icon="mdi:heart" color={color} size={28} />
              ) : (
                <Iconify icon="mdi-light:heart" color={color} size={28} />
              ),
          }}
        />
        {/* mdi-light:heart */}
      </Tabs>
    </ThemeProvider>
  );
};

export default RootLayout;
