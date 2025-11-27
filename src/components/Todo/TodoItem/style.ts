import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#F0D1A8",
    elevation:3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,    
  },
  info: {
    position: "relative",
    flex: 1,
    paddingLeft: 30,
  },
  actions: {
    gap: 5,
    marginStart: 5,
    flexDirection: "row",
  },
  completed: {
    position: "absolute",
    top: 3,
    left: 0,
  },
  task: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 16,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#F88787",
  },
  description: {
    fontSize: 12,
    color: "#444",
  },
  edit: {
    color:"#977f7bff"
  },
  trash: {},
});

export default styles;
