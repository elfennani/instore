import { StyleSheet, Text } from "react-native";
import React from "react";
import SafeView from "../components/common/SafeView";
import Header from "../components/home/Header";

const Home = () => {
  return (
    <SafeView style={{ padding: 20, gap: 16 }}>
      <Header />
      <Text>Home</Text>
    </SafeView>
  );
};

export default Home;

const styles = StyleSheet.create({});
