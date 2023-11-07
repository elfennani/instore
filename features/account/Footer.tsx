import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Iconify } from "react-native-iconify";

type Props = {
  isLoggedIn: boolean;
};

const Footer = ({ isLoggedIn }: Props) => {
  return (
    <View style={styles.footer}>
      <Text style={{ color: "#9898a3", fontSize: 12 }}>Privacy Policy</Text>
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <TouchableOpacity hitSlop={16} activeOpacity={0.6}>
          <View style={styles.language}>
            <Text style={{ color: "#9898a3", fontSize: 12 }}>English</Text>
            <Iconify
              icon="mdi-light:chevron-down"
              size={18}
              color={"#9898a3"}
            />
          </View>
        </TouchableOpacity>
        {isLoggedIn && (
          <>
            <Text style={{ color: "#9898a3" }}>|</Text>
            <TouchableOpacity hitSlop={16} activeOpacity={0.6}>
              <View style={styles.language}>
                <Text style={{ color: "#9898a3", fontSize: 12 }}>Logout</Text>
                <Iconify icon="mdi-light:logout" size={18} color={"#9898a3"} />
              </View>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  language: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
