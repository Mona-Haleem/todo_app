/**
 * Type definitions for the Button component.
 * Defines props interface including variants, icons, and style options.
 */

import {
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  TouchableOpacityProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

export type ButtonVariant = "text" | "solid" | "outline";

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  icons?: [IoniconName|undefined, IoniconName] |[IoniconName] ;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconStyle?: TextStyle;
  variant?: ButtonVariant;
}
