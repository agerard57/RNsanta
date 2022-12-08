import React, { FC } from "react";
import { Text, View } from "react-native";

export const Navbar: FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Home Screen</Text>
    </View>
  );
};
