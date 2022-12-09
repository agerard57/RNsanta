import React, { FC, useContext } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { Container, PageTitle, TopButton } from "../../core";
import { ThemeContext, ThemeType } from "../../theme";

export const HoodDetailsPage: FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles().page}>
      <PageTitle additionalStyling={styles().addButton} title="Home" />
      <Container additionalStyling={styles().clock}>
        <Text>dfdsd</Text>
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
