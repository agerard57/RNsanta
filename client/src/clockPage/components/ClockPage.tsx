import React, { FC, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";

import { Container, PageTitle } from "../../core";
import { ThemeContext, ThemeType } from "../../theme";

export const ClockPage: FC = () => {
  const theme = useContext(ThemeContext);

  const christmas = new Date("December 25, 2020 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = christmas - now;

  const countdown = () => {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <View style={styles().page}>
      <PageTitle additionalStyling={styles().addButton} title="Home" />
      <Container additionalStyling={styles().clock}>
        <Text>{countdown()}</Text>
      </Container>
    </View>
  );
};

const styles = (theme?: ThemeType) =>
  StyleSheet.create({
    page: {
      paddingHorizontal: 16,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    addButton: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      borderRadius: 39,
      paddingBottom: 16,
      padding: 0,
    },
    addButtonText: {
      fontSize: 24,
      fontFamily: theme && theme.fonts.extraBold,
      color: theme && theme.colors.black,
    },
    clock: {
      width: "100%",
      borderRadius: 39,
      marginBottom: 56,
      padding: 0,
      paddingHorizontal: 20,
      overflow: "hidden",
    },
  });
