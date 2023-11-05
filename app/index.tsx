import { StyleSheet, View } from "react-native";
import React from "react";
import SafeView from "../components/common/SafeView";
import Header from "../components/home/Header";
import Banners from "../components/home/Banners";
import Categories from "../components/home/Categories";

const Home = () => {
  return (
    <SafeView>
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <Header />
      </View>
      <Banners />
      <Categories />
    </SafeView>
  );
};

export default Home;

const styles = StyleSheet.create({});
