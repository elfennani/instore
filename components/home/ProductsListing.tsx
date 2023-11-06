import { Dimensions, StyleSheet, TouchableHighlight, View } from "react-native";
import React, { useMemo } from "react";
import SectionLabel from "../common/SectionLabel";
import { useTheme } from "@react-navigation/native";
import { ProductListingItem } from "@/types/ProductType";
import Product from "../product/Product";
import FilterButton from "../common/FilterButton";

type Props = {
  products: ProductListingItem[];
};

const ProductsListing = ({ products }: Props) => {
  const {
    colors: { text },
  } = useTheme();

  const productsPaired = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < products.length; i += 2) {
      pairs.push(products.slice(i, i + 2));
    }
    return pairs;
  }, [products]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
        <SectionLabel style={{ flex: 1 }}>Recent Products</SectionLabel>
        <TouchableHighlight
          onPress={() => {}}
          underlayColor={"rgba(0,0,0,0.1)"}
          style={{ borderRadius: 5 }}
        >
          <FilterButton />
        </TouchableHighlight>
      </View>
      <View style={styles.products}>
        {productsPaired.map((pair, index) => (
          <View key={index} style={styles.productsPair}>
            {pair.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProductsListing;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  products: {
    gap: 8,
  },
  productsPair: {
    flexDirection: "row",
    gap: 8,
  },
  product: {
    aspectRatio: 7 / 8,
    backgroundColor: "#F0F2F1",
    borderRadius: 5,
    flex: 1,
    width: (Dimensions.get("window").width - 40 - 8) / 2,
  },
});
