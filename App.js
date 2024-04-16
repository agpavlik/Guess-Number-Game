import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient
      colors={["#4e0329", "#ddb59f", "#4e0329"]}
      style={styles.rootScreen}
    >
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
