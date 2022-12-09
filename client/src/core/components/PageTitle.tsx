import React, { FC, useContext } from "react";
import { StyleSheet, StyleProp, ViewStyle, Text, View } from "react-native";

import { ThemeContext, ThemeType } from "../../theme";
import { Container } from "./Container";

type Props = {
  title: string;
  additionalStyling?: StyleProp<ViewStyle>;
};

export const PageTitle: FC<Props> = ({ title, additionalStyling }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={additionalStyling}>
      <Container additionalStyling={[additionalStyling, { paddingTop: 16 }]}>
        <Text style={styles(theme).textTitle}>{title}</Text>
      </Container>
    </View>
  );
};

const styles = (theme?: ThemeType) =>
  StyleSheet.create({
    textTitle: {
      fontSize: 24,
      fontFamily: theme && theme.fonts.extraBold,
      color: theme && theme.colors.black,
    },
  });
