import { LinearGradient } from "expo-linear-gradient";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

export const RedBackground: FC = () => (
  <LinearGradient colors={["#F7484C", "#F17A7C"]} style={styles.container} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    zIndex: -1,
  },
});
