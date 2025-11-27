import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 16,
  },
  button:{
    flex: 1,
    paddingVertical:12
  }
});

export default styles;
