import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import SafeView from "@/features/common/SafeView";
import Header from "@/features/home/Header";
import Banners from "@/features/home/Banners";
import Categories from "@/features/home/Categories";
import ProductsListing from "@/features/home/ProductsListing";
import { ProductListingItem } from "@/types/ProductType";
import { Iconify } from "react-native-iconify";
import { useTheme } from "@react-navigation/native";

const recentProducts: ProductListingItem[] = [
  {
    id: "2c7b07dd-ef6c-41df-8d21-3f6d165afab2",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    price: 199.99,
    stock: 10,
    title: "Generic Fresh Laptop",
  },
  {
    id: "cd82d018-2583-4d5c-aa0c-34bb0715c370",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    price: 19.99,
    stock: 1,
    title: "Generic Metal Gloves",
  },
  {
    id: "81a28069-77e5-491a-837d-7a1f34bb12db",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    price: 9.99,
    stock: 12,
    title: "Fantastic Plastic Ball",
  },
  {
    id: "3a0e6c5d-1aaf-4a9f-8e6c-3a0e6c5d1aaf",
    image: "https://picsum.photos/200/300",
    price: 29.99,
    stock: 21,
    title: "Elegant Frozen Shirt",
  },
];

const Home = () => {
  const {
    colors: { border },
  } = useTheme();
  return (
    <SafeView style={{ position: "relative" }}>
      <ScrollView stickyHeaderIndices={[1]}>
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <Header />
        </View>
        <View style={styles.stickySearchContainer}>
          <View style={styles.searchContainer}>
            <Iconify icon="mdi-light:magnify" color={border} size={24} />
            <TextInput
              style={styles.search}
              placeholder="Search here ..."
              placeholderTextColor={border}
            />
          </View>
        </View>
        <Banners />
        <Categories />
        <ProductsListing products={recentProducts} />
      </ScrollView>
    </SafeView>
  );
};

export default Home;

const styles = StyleSheet.create({
  stickySearchContainer: {
    padding: 20,
    paddingVertical: 8,
    backgroundColor: "white",
  },
  searchContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#F0F2F1",
    flexDirection: "row",
    paddingLeft: 12,
    alignItems: "center",
  },
  search: {
    padding: 12,
    paddingVertical: 10,
    fontSize: 12,
    flex: 1,
  },
});
