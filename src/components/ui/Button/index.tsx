/**
 * Button Component
 * 
 * Reusable button component with multiple variants (solid, outline, text).
 * Supports icons, text, and customizable styling.
 */

import { Text, TouchableOpacity, View } from "react-native";
import styles, { textVariantStyles, variantStyles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({
  text,
  icons,// a list of two icons one to be rendered on start and the other at the end
  onPress,
  style,
  textStyle,
  iconStyle,
  variant = "solid",
  ...props
}) => {
  return (
    <TouchableOpacity
      testID="button"
      onPress={onPress}
      style={[
        styles.button,
        variantStyles[variant],
        style,
        props?.disabled && styles.disabled,
      ]}
      {...props}
    >
      <View style={styles.content}>
        {icons?.length && icons[0] && (
          <Ionicons
            name={icons[0]}
            size={22}
            color={iconStyle?.color || textVariantStyles[variant].color}
            style={[{ marginRight: text ? 8 : 0 }, iconStyle]}
          />
        )}
        {text && (
          <Text style={[styles.text, textVariantStyles[variant], textStyle]}>
            {text}
          </Text>
        )}
        {icons?.length === 2 && icons[1] && (
          <Ionicons
            name={icons[1]}
            size={22}
            color={iconStyle?.color || textVariantStyles[variant].color}
            style={[{ marginLeft: text ? 8 : 0 }, iconStyle]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
