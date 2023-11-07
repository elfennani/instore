import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { Iconify } from "react-native-iconify";
import { useTheme } from "@react-navigation/native";

type Props = {};

const FilterButton = (props: Props) => {
  const {
    colors: { text },
  } = useTheme();

  return (
    <TouchableHighlight
      onPress={() => {}}
      underlayColor={"rgba(0,0,0,0.1)"}
      style={{ borderRadius: 5 }}
    >
      <View style={styles.filterButton}>
        <Text style={[styles.filterText, { color: text }]}>Filter</Text>
        <Iconify icon="material-symbols-light:filter-alt-outline" size={16} />
      </View>
    </TouchableHighlight>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#F0F2F1",
  },
  filterText: {
    fontSize: 12,
  },
});
