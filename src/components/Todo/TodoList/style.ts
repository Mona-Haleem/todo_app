import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listContainer: { flex: 1, padding: 15 },
  list: {
    padding: 15,
    paddingBottom: 30,
    backgroundColor: "#FAF7F2",
    borderRadius: 10,
    gap: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});

export default styles;
