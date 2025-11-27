import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  completedContainer: { opacity: 0.7, backgroundColor: "#F9FAFB" },
  content: {
    position: "relative",
    flex: 1,
    paddingLeft: 30,
  },
  actions: {
    gap: 10,
    marginStart: 5,
    flexDirection: "row",
  },
  checkbox: {
    position: "absolute",
    top: 0,
    left: 0,
    color: "#000",
  },
  task: {
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#9CA3AF",
  },
  description: {
    fontSize: 14,
    color: "#9CA3AF",
    lineHeight: 20,
  },
  editBtn: { color: "#6366F1" },
  trashBtn: { color: "#F88787" },
});

export default styles;
