import InputField from "@/features/common/InputField";
import SafeView from "@/features/common/SafeView";
import supabase from "@/services/supabase";
import { useTheme } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { Iconify } from "react-native-iconify";

type Props = {};

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
};

const RegisterPage = (props: Props) => {
  const {
    colors: { primary, text },
  } = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormFields>({});

  const onSubmitHandler: SubmitHandler<FormFields> = async (data) => {
    try {
      const { error, data: res } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        phone: data.phone,
        options: {
          data: {
            first_name: data.firstName,
            last_name: data.lastName,
          },
        },
      });

      if (error) {
        throw error;
      }

      ToastAndroid.show(
        "Check your email for verification link",
        ToastAndroid.SHORT
      );
    } catch (error) {
      ToastAndroid.show(
        "Something went wrong. Please try again",
        ToastAndroid.SHORT
      );
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <SafeView style={{ padding: 20 }}>
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.8} hitSlop={16}>
            <Iconify icon="mdi:close" size={24} color="#767676" />
          </TouchableOpacity>
          <Link
            href="/login"
            replace
            style={{ color: primary, fontWeight: "600" }}
          >
            Sign In
          </Link>
        </View>
        <View style={{ height: 32 }} />
        <Text style={[styles.pageTitle, { color: text }]}>Register</Text>
        <View style={{ height: 32 }} />
        <View style={{ gap: 16 }}>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Controller
              control={control}
              name="firstName"
              rules={{ required: "First name is required" }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputField
                  label="First name"
                  placeholder="John"
                  containerStyle={{ flex: 1 }}
                  style={{ fontSize: 16 }}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  footer={
                    errors.firstName && (
                      <Text style={styles.error}>
                        {errors.firstName.message}
                      </Text>
                    )
                  }
                />
              )}
            />
            <Controller
              control={control}
              name="lastName"
              rules={{ required: "Last name is required" }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputField
                  label="Last name"
                  placeholder="Doe"
                  containerStyle={{ flex: 1 }}
                  style={{ fontSize: 16 }}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  footer={
                    errors.lastName && (
                      <Text style={styles.error}>
                        {errors.lastName.message}
                      </Text>
                    )
                  }
                />
              )}
            />
          </View>
          <Controller
            control={control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Email"
                placeholder="Enter your email"
                style={{ fontSize: 16 }}
                keyboardType="email-address"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                footer={
                  errors.email && (
                    <Text style={styles.error}>{errors.email.message}</Text>
                  )
                }
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            rules={{ required: "Phone number is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Phone"
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                style={{ fontSize: 16 }}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                footer={
                  errors.phone && (
                    <Text style={styles.error}>{errors.phone.message}</Text>
                  )
                }
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: "Password is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Password"
                placeholder="Enter your password"
                secureTextEntry
                style={{ fontSize: 16 }}
                autoCapitalize="none"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                footer={
                  errors.password && (
                    <Text style={styles.error}>{errors.password.message}</Text>
                  )
                }
              />
            )}
          />
        </View>
        <View style={{ height: 32 }} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.login, { backgroundColor: primary }]}
          onPress={handleSubmit(onSubmitHandler)}
        >
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </SafeView>
    </ScrollView>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: "600",
  },
  forgot: {
    color: "#767676",
    padding: 8,
    textAlign: "center",
  },
  login: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  loginText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  error: { color: "#D65B5B", fontSize: 12 },
});
