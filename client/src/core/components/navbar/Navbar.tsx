import React, { FC, useContext } from "react";
import { View, StyleSheet, Button } from "react-native";
import { ThemeContext } from "../../../theme/contexts";
import { NavbarBackground } from "./NavbarBackground";
import { ThemeType } from "../../../theme";
import { useNavigation } from "@react-navigation/native";

export const Navbar: FC = () => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <>
      <View
        style={[styles({ size: 42, theme }).commonButtonBg, { left: "25%" }]}
      >
        <Button
          onPress={() => {
            navigation.navigate("Hoods");
          }}
          title="H"
          color="transparent"
        />
      </View>
      <View
        style={[
          styles({ size: 55, theme }).commonButtonBg,
          { marginLeft: "auto", marginRight: "auto", left: 0, right: 0 },
        ]}
      >
        <Button
          onPress={() => {
            navigation.navigate("Hoods");
          }}
          title="G"
          color="transparent"
        />
      </View>
      <View
        style={[styles({ size: 42, theme }).commonButtonBg, { right: "25%" }]}
      >
        <Button
          onPress={() => {
            navigation.navigate("Hoods");
          }}
          title="C"
          color="transparent"
        />
      </View>
      <NavbarBackground />
    </>
  );
};

const styles = ({ size, theme }: { size?: number; theme: ThemeType }) =>
  StyleSheet.create({
    commonButtonBg: {
      position: "absolute",
      width: size,
      height: size,
      bottom: 21,
      borderRadius: 50,
      backgroundColor: theme.colors.metallic,
    },
  });
