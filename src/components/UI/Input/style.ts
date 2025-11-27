import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: "500",
    color: "#333",
    fontSize: 16,
  },
  input: {
       borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#F9FAFB',
 
 
  },
  charCount: {
    position: 'absolute',
    bottom: 8,
    right: 12,
    fontSize: 12,
    color: '#9CA3AF',
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: 'top',
    paddingBottom: 18,
  }

});

export default styles;
