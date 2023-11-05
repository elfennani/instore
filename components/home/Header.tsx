import {
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Iconify } from "react-native-iconify";
import { useTheme } from "@react-navigation/native";

type Props = {};

const Header = (props: Props) => {
  const {
    colors: { border, text, notification },
  } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity hitSlop={16} activeOpacity={0.6}>
          <View>
            <Text style={[styles.title, { color: border }]}>
              Delivery address
            </Text>
            <View style={styles.addressContainer}>
              <Text style={[styles.address, { color: text }]}>
                Salatiga City, Central Java
              </Text>
              <Iconify color={text} icon="mdi-light:chevron-down" size={18} />
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity hitSlop={16} style={{ position: "relative" }}>
            <View style={[styles.badge, { backgroundColor: notification }]}>
              <Text style={{ color: "white", fontSize: 6 }}>2</Text>
            </View>
            <Iconify icon="mdi-light:cart" size={24} />
          </TouchableOpacity>
          <TouchableOpacity hitSlop={16}>
            <Iconify icon="mdi-light:bell" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Iconify icon="mdi-light:magnify" color={border} size={24} />
        <TextInput
          style={styles.search}
          placeholder="Search here ..."
          placeholderTextColor={border}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 10,
    color: "#C8C8CB",
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  address: {
    fontSize: 12,
    fontWeight: "600",
  },
  badge: {
    width: 12,
    height: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    top: -2,
    right: -2,
    zIndex: 1,
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
