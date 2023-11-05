import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";
import SectionLabel from "@/components/common/SectionLabel";

type Props = {};

const Categories = (props: Props) => {
  const {
    colors: { border, card, primary },
  } = useTheme();

  const cats = [
    {
      name: "Apparel",
      icon: <Iconify icon="mdi:hanger" size={28} color={border} />,
    },
    {
      name: "School",
      icon: <Iconify icon="mdi:account-school" size={28} color={border} />,
    },
    {
      name: "Sports",
      icon: <Iconify icon="mdi:basketball" size={28} color={border} />,
    },
    {
      name: "Electronic",
      icon: <Iconify icon="mdi:monitor-cellphone" size={28} color={border} />,
    },
    {
      name: "All",
      icon: <Iconify icon="mdi:apps" size={28} color={primary} />,
    },
  ];

  return (
    <View style={styles.container}>
      <SectionLabel>Category</SectionLabel>
      <View style={styles.categories}>
        {cats.map((cat, index) => (
          <TouchableOpacity
            key={index}
            style={styles.category}
            activeOpacity={0.6}
            hitSlop={16}
          >
            <>
              <View
                style={[
                  styles.catIcon,
                  { backgroundColor: cat.name == "All" ? "#E9FFF8" : card },
                ]}
              >
                {cat.icon}
              </View>
              <Text
                numberOfLines={2}
                style={[{ color: border }, styles.catTitle]}
              >
                {cat.name}
              </Text>
            </>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 20,
    gap: 16,
  },
  categories: {
    flexDirection: "row",
    gap: 8,
  },
  category: {
    alignItems: "center",
    gap: 6,
    flex: 1,
  },
  catIcon: {
    aspectRatio: 1,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  catTitle: {
    fontSize: 12,
    textAlign: "center",
    width: "100%",
  },
});
