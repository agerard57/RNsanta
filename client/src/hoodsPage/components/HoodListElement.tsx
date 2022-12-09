import React, { FC, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ThemeContext, ThemeType } from "../../theme";
import { HoodsType } from "../types";

type Props = {
  hood: HoodsType;
};

export const HoodListElement: FC<Props> = ({ hood }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles({}).elementContainer}>
      <View style={styles({ hood }).coloredChip} />
      <View
        style={{
          flex: 1,
          marginLeft: 20,
        }}
      >
        <Text style={styles({ theme }).elementTitle}>{hood.name}</Text>
        <Text style={styles({ theme }).elementSubtitle}>
          {`${hood.nbMembers} Member${hood.nbMembers > 1 ? "s" : ""}`}
        </Text>
      </View>
    </View>
  );
};

type StylesProps = {
  hood?: HoodsType;
  theme?: ThemeType;
};

const styles = ({ hood, theme }: StylesProps) =>
  StyleSheet.create({
    elementContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 20,
      width: "100%",
    },
    coloredChip: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: hood && hood.hexColor,
    },
    elementTitle: {
      fontSize: 20,
      fontFamily: theme && theme.fonts.semiBold,
      color: theme && theme.colors.black,
    },
    elementSubtitle: {
      fontSize: 16,
      fontFamily: theme && theme.fonts.regular,
      color: theme && theme.colors.grey,
    },
  });
