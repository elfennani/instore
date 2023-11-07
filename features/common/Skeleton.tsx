import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

type Props = {
  style?: StyleProp<ViewStyle>;
};

const Skeleton = ({ style }: Props) => {
  return <View style={[styles.container, style]} />;
};

export default Skeleton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    borderRadius: 5,
    height: 24,
  },
});
