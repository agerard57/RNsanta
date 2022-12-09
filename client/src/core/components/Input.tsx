import { FC, useContext } from "react";
import {
  StyleProp,
  View,
  ViewStyle,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";

import { ThemeContext, ThemeType } from "../../theme";

type Props = {
  label: String;
  additionalStyling?: StyleProp<ViewStyle>;
  textInputParams?: TextInputProps;
  updateInputValue: (text: string) => void;
};

export const Input: FC<Props> = ({
  label,
  additionalStyling,
  textInputParams,
  updateInputValue,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[additionalStyling, styles().view]}>
      <Text style={styles().label}>{label}</Text>
      <TextInput
        onChangeText={updateInputValue}
        {...textInputParams}
        style={styles().input}
      />
    </View>
  );
};

const styles = (theme?: ThemeType) =>
  StyleSheet.create({
    view: {
      width: "100%",
      marginVertical: "0.75rem",
    },
    label: {
      fontSize: 20,
      fontFamily: theme && theme.fonts.semiBold,
      color: theme && theme.colors.black,
      textAlign: "left",
      marginLeft: "0.6rem",
    },
    input: {
      backgroundColor: theme && theme.colors.white,
      width: "100%",
      height: "2.5em",
      marginTop: "0.5rem",
      borderRadius: 10,
      paddingHorizontal: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
  });
