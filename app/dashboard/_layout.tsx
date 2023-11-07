import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Drawer } from "expo-router/drawer";
import React, { useEffect } from "react";
import { Slot, Stack, router, useNavigation } from "expo-router";
import { DrawerContent } from "@react-navigation/drawer";

type Props = {};

const DashboardLayout = (props: Props) => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: 100,
        drawerStyle: {
          paddingTop: 8,
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="products"
        options={{
          title: "Products",
        }}
      />
    </Drawer>
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({});
