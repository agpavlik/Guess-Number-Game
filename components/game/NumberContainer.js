import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 4,
    // borderColor: Colors.accent900,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    elevation: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.primary800,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
