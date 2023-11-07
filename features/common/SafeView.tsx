import { StyleProp, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SafeViewProps = {
  children: React.ReactNode | React.ReactNode[];
  style?: StyleProp<ViewStyle>;
};

const SafeView = (props: SafeViewProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
      }}
    >
      <View style={[props.style]}>{props.children}</View>
    </View>
  );
};

export default SafeView;
