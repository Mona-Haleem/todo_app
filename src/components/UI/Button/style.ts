import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ButtonVariant } from "./type";

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  disabled: { opacity: 0.6 },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;

export const variantStyles: Record<ButtonVariant, ViewStyle> = {
  solid: {
    backgroundColor: "#6366F1",
    borderWidth: 0,
  },
  text: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#6366F1",
  },
};

export const textVariantStyles: Record<ButtonVariant, TextStyle> = {
  solid: { color: "#FFF" },
  text: { color: "#6366F1" },
  outline: { color: "#6366F1" },
};

