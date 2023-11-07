import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { ComponentType } from "react";
import SafeView from "@/components/common/SafeView";
import { useTheme } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";

type Props = {};

const AccountPage = (props: Props) => {
  const {
    colors: { text: color },
  } = useTheme();

  const options = [
    {
      icon: <Iconify icon="mdi-light:account-alert" size={32} color={color} />,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <Iconify icon="mdi-light:bell" size={32} color={color} />,
      title: "Notifications",
    },
    {
      icon: <Iconify icon="mdi-light:cart" size={32} color={color} />,
      title: "Shopping Cart",
    },
    {
      icon: <Iconify icon="mdi-light:credit-card" size={32} color={color} />,
      title: "My Cards",
    },
    {
      icon: <Iconify icon="mdi-light:settings" size={32} color={color} />,
      title: "Settings",
    },
  ];

  return (
    <SafeView style={{ padding: 20, flex: 1 }}>
      <TouchableOpacity hitSlop={16} activeOpacity={0.8}>
        <View style={styles.profile}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://picsum.photos/200/300",
                width: 48,
                height: 48,
              }}
              borderRadius={32}
            />
          </View>
          <View style={styles.usernameContainre}>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={[styles.username, { color }]}>Elfennani Nizar</Text>
          </View>
          <Iconify icon="mdi-light:chevron-down" size={24} color={color} />
        </View>
      </TouchableOpacity>
      <View style={styles.split} />
      <View style={{ gap: 4 }}>
        {options.map((option) => (
          <TouchableHighlight
            onPress={() => option.path && router.push(option.path as any)}
            style={styles.hightlight}
            key={option.title}
            underlayColor={"rgba(0,0,0,0.07)"}
            activeOpacity={0.8}
          >
            <View style={styles.option}>
              {option.icon}
              <Text style={[styles.optionText, { color }]}>{option.title}</Text>
              <Iconify icon="mdi-light:chevron-right" size={24} color={color} />
            </View>
          </TouchableHighlight>
        ))}
      </View>
      <View style={{ flex: 1 }} />
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
          <Text style={{ color: "#9898a3" }}>|</Text>
          <TouchableOpacity hitSlop={16} activeOpacity={0.6}>
            <View style={styles.language}>
              <Text style={{ color: "#9898a3", fontSize: 12 }}>Logout</Text>
              <Iconify icon="mdi-light:logout" size={18} color={"#9898a3"} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeView>
  );
};

export default AccountPage;

const styles = StyleSheet.create({
  profile: {
    paddingHorizontal: 8,
    paddingRight: 16,
    paddingVertical: 20,
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  split: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginBottom: 20,
  },
  usernameContainre: {
    gap: 2,
    flex: 1,
  },
  imageContainer: {
    borderRadius: 50,
    // elevation: 4,
    width: 48,
    height: 48,
    // backgroundColor: "red",
  },
  welcome: {
    fontSize: 14,
    color: "#9898a3",
  },
  username: {
    fontWeight: "600",
    fontSize: 18,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
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
  hightlight: {
    borderRadius: 5,
  },
});
