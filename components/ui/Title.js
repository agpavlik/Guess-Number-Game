import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    // borderWidth: Platform.OS === 'android' ? 2 : 0, // way 1
    // borderWidth: Platform.select({ ios: 0, android: 2 }), // way 2
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
