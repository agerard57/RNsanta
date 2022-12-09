import React, { FC, useContext } from "react";
import { View, StyleSheet } from "react-native";

import { ThemeType } from "../../../theme";
import { ThemeContext } from "../../../theme/contexts";
import { NavbarBackground } from "./NavbarBackground";
import { TouchableIcon } from "./TouchableIcon";

export const Navbar: FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <View
        style={[styles({ size: 42, theme }).commonButtonBg, { left: "25%" }]}
      >
        <TouchableIcon route="Home" />
      </View>
      <View
        style={[
          styles({ size: 55, theme }).commonButtonBg,
          { marginLeft: "auto", marginRight: "auto", left: 0, right: 0 },
        ]}
      >
        <TouchableIcon route="Hoods" />
      </View>
      <View
        style={[styles({ size: 42, theme }).commonButtonBg, { right: "25%" }]}
      >
        <TouchableIcon route="Clock" />
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
