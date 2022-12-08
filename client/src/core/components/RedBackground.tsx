import { FC, ReactNode } from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  children: ReactNode;
};

export const RedBackground: FC<Props> = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
