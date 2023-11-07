import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Iconify } from "react-native-iconify";
import { useTheme } from "@react-navigation/native";
import Skeleton from "../common/Skeleton";
import { User } from "@supabase/supabase-js";
import { Link } from "expo-router";

type Props = {
  isLoading?: boolean;
  user: User | undefined;
};

const Header = ({ isLoading = false, user }: Props) => {
  const {
    colors: { text: color },
  } = useTheme();

  if (isLoading)
    return (
      <View style={styles.profile}>
        <Skeleton style={{ width: 48, height: 48, borderRadius: 50 }} />
        <View style={styles.usernameContainer}>
          <Skeleton />
          <Skeleton style={{ width: "50%" }} />
        </View>
        <Skeleton style={{ width: 32, height: 32 }} />
      </View>
    );

  if (!user)
    return (
      <View style={styles.profile}>
        <Skeleton style={{ width: 48, height: 48, borderRadius: 50 }} />
        <View style={styles.usernameContainer}>
          <Text style={styles.welcome}>You're not logged in</Text>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Link style={{ fontWeight: "600", color }} href={"/login"}>
              Login
            </Link>
            <Text style={{ color: "#9898a3" }}>or</Text>
            <Link style={{ fontWeight: "600", color }} href={"/login"}>
              Create an account
            </Link>
          </View>
        </View>
      </View>
    );

  return (
    <TouchableOpacity hitSlop={16} activeOpacity={0.8} onPress={() => {}}>
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
        <View style={styles.usernameContainer}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={[styles.username, { color }]}>{user.email}</Text>
        </View>
        <Iconify icon="mdi-light:chevron-down" size={24} color={color} />
      </View>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 50,
    width: 48,
    height: 48,
  },
  profile: {
    paddingHorizontal: 8,
    paddingRight: 16,
    paddingVertical: 20,
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  usernameContainer: {
    gap: 2,
    flex: 1,
  },
  welcome: {
    fontSize: 14,
    color: "#9898a3",
  },
  username: {
    fontWeight: "600",
    fontSize: 18,
  },
});
