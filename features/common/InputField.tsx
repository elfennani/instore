import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";

interface Props extends TextInputProps {
  label?: string;
  leadingChild?: React.ReactNode;
  trailingChild?: React.ReactNode;
  footer?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const InputField = ({
  label,
  leadingChild,
  trailingChild,
  footer,
  containerStyle,
  onBlur,
  ...props
}: Props) => {
  const {
    colors: { border, text, primary },
  } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[{ gap: 4 }, containerStyle]}>
      {label && (
        <Text
          style={[styles.label, { color: isFocused ? primary : "#929292" }]}
        >
          {label}
        </Text>
      )}
      <View
        style={[
          styles.searchContainer,
          { borderColor: isFocused ? primary : border },
        ]}
      >
        {leadingChild}
        <TextInput
          placeholderTextColor={border}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...props}
          style={[styles.search, props.style]}
        />
        {trailingChild}
      </View>
      {footer}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  label: {
    fontWeight: "600",
    borderColor: "#F0F2F1",
  },
  searchContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#F0F2F1",
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    padding: 16,
    paddingVertical: 10,
    fontSize: 12,
    flex: 1,
  },
});
