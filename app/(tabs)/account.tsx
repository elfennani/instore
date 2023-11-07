import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import SafeView from "@/features/common/SafeView";
import { useTheme } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";
import supabase from "@/services/supabase";
import { useQuery } from "@tanstack/react-query";
import Header from "@/features/account/Header";
import Footer from "@/features/account/Footer";
import useOptions from "@/features/account/hooks/useOptions";
import useUser from "@/features/account/hooks/useUser";
import Skeleton from "@/features/common/Skeleton";

type Props = {};

const AccountPage = (props: Props) => {
  const {
    colors: { text: color },
  } = useTheme();
  const { isLoading, data: user } = useUser();
  const options = useOptions({ user });

  return (
    <SafeView style={{ padding: 20, flex: 1 }}>
      <Header user={user} isLoading={isLoading} />
      <View style={styles.split} />
      <View style={styles.optionsContainer}>
        {isLoading ? (
          <>
            <Skeleton style={{ height: 64 }} />
            <Skeleton style={{ height: 64 }} />
            <Skeleton style={{ height: 64 }} />
          </>
        ) : (
          options.map((option) => (
            <TouchableHighlight
              onPress={() => option.path && router.push(option.path as any)}
              style={styles.optionHighlight}
              key={option.title}
              underlayColor={"rgba(0,0,0,0.07)"}
              activeOpacity={0.8}
            >
              <View style={styles.option}>
                {option.icon}
                <Text style={[styles.optionText, { color }]}>
                  {option.title}
                </Text>
                <Iconify
                  icon="mdi-light:chevron-right"
                  size={24}
                  color={color}
                />
              </View>
            </TouchableHighlight>
          ))
        )}
      </View>
      <View style={{ flex: 1 }} />
      <Footer isLoggedIn={!!user} />
    </SafeView>
  );
};

export default AccountPage;

const styles = StyleSheet.create({
  split: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginBottom: 20,
  },
  optionsContainer: {
    gap: 4,
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
  optionHighlight: {
    borderRadius: 5,
  },
});
