import { FC, ReactNode, useContext } from "react";
import { StyleProp, View, ViewStyle, StyleSheet } from "react-native";

import { ThemeContext, ThemeType } from "../../theme";

type Props = {
  children: ReactNode;
  additionalStyling?: StyleProp<ViewStyle>;
};

export const Container: FC<Props> = ({ children, additionalStyling }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles(theme).container, additionalStyling]}>{children}</View>
  );
};

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.cream,
      flex: 1,
      padding: 16,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
