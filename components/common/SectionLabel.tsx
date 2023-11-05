import { StyleSheet, Text, TextProps, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

type Props = TextProps;

const SectionLabel = (props: Props) => {
  const {
    colors: { text },
  } = useTheme();
  return (
    <Text
      {...props}
      style={[{ color: text, fontWeight: "600" }, props.style]}
    />
  );
};

export default SectionLabel;

const styles = StyleSheet.create({});
