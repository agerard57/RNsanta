import { FC } from "react";
import {
  Text,
  StyleSheet,
  StyleProp,
  TextProps,
  TextStyle,
} from "react-native";

import { ThemeType } from "../../theme";

type CustomTextTypes = "main" | "timer" | "timerSmall";

interface CustomTextProps extends TextProps {
  additionalStyling?: StyleProp<TextStyle>;
  type: CustomTextTypes;
  theme: ThemeType;
}

export const CustomText: FC<CustomTextProps> = ({
  children,
  type,
  additionalStyling,
  theme,
  ...props
}) => {
  return (
    <Text
      style={[styles(theme, type).customTextStyling, additionalStyling]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = (theme: ThemeType, type: CustomTextTypes) =>
  StyleSheet.create({
    customTextStyling: {
      color: theme.colors.black,
      fontSize: type === "main" ? 20 : type === "timer" ? 40 : 24,
      fontFamily: type === "main" ? theme.fonts.bold : theme.fonts.semiBold,
      textAlign: type === "main" ? "center" : "left",
    },
  });
