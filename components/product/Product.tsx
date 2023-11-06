import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ProductListingItem } from "@/types/ProductType";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";

type Props = {
  product: ProductListingItem;
};

const Product = ({ product }: Props) => {
  const {
    colors: { card, text, primary, border: borderColor },
  } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.product, { borderColor: card }]}
      activeOpacity={0.8}
      onPress={() => router.push("/product/")}
    >
      <>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.info}>
          <Text numberOfLines={1} style={[styles.title, { color: text }]}>
            {product.title} ifbinef ifnfi iefn
          </Text>
          <Text numberOfLines={1} style={[styles.price, { color: text }]}>
            ${product.price}
          </Text>
          <Text style={styles.warning} numberOfLines={1}>
            {product.stock == 1 && "Only 1 left in stock"}
          </Text>
          <TouchableHighlight
            onPress={() => {}}
            underlayColor={"#59a990"}
            style={[styles.button, { backgroundColor: primary }]}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 12 }}>
              Add to cart
            </Text>
          </TouchableHighlight>
        </View>
      </>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  product: {
    flex: 1,
    borderRadius: 6,
    overflow: "hidden",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1.5,
  },
  info: {
    padding: 12,
    gap: 4,
  },
  title: {
    fontSize: 12,
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 4,
  },
  warning: {
    fontSize: 10,
    color: "red",
  },
});
