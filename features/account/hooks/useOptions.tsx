import { useTheme } from "@react-navigation/native";
import { User } from "@supabase/supabase-js";
import { ReactNode } from "react";
import { Iconify } from "react-native-iconify";

const useOptions = ({ user }: { user?: User } = {}) => {
  const {
    colors: { text: color },
  } = useTheme();

  interface Option {
    icon: ReactNode;
    title: string;
    path?: string;
  }

  const options = [
    {
      icon: <Iconify icon="mdi-light:cart" size={32} color={color} />,
      title: "Shopping Cart",
    },
    {
      icon: <Iconify icon="mdi-light:settings" size={32} color={color} />,
      title: "Settings",
    },
  ];

  const authedOptions = [
    {
      icon: <Iconify icon="mdi-light:bell" size={32} color={color} />,
      title: "Notifications",
    },
    {
      icon: <Iconify icon="mdi-light:credit-card" size={32} color={color} />,
      title: "My Cards",
    },
  ];

  const dashboardOption = {
    icon: <Iconify icon="mdi-light:account-alert" size={32} color={color} />,
    title: "Dashboard",
    path: "/dashboard",
  };

  return [
    ...(user?.role === "admin" ? [dashboardOption] : []),
    ...(user ? authedOptions : []),
    ...options,
  ] satisfies Option[] as Option[];
};

export default useOptions;
