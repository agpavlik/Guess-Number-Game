import { View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

// Get the device width by using dimensions.
// Get method which takes an argument, which is a string,
// and holds either a value of screen or window.
// (Window is excluding the status bar)
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    padding: deviceWidth < 380 ? 24 : 36,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    // elevation: 8,
    // alignItems: "center",
    // justifyContent: "center",
    // shadowColor: Colors.primary800,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25,
  },
  numberText: {
    color: Colors.accent500,
    // fontSize: 36,
    fontSize: deviceWidth < 380 ? 28 : 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
