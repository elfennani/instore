import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Iconify } from "react-native-iconify";

type Props = {};

const TabsLayout = (props: Props) => {
  return (
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
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Iconify icon="mdi:file" color={color} size={28} />
            ) : (
              <Iconify icon="mdi-light:file" color={color} size={28} />
            ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Iconify icon="mdi:account" color={color} size={28} />
            ) : (
              <Iconify icon="mdi-light:account" color={color} size={28} />
            ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
