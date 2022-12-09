import { FC, useCallback } from "react";
import { StyleSheet, Text, Linking } from "react-native";

import { ThemeType } from "../../theme";

type Props = {
  url: string;
  name: string;
  theme: ThemeType;
};

export const OpenURLButton: FC<Props> = ({ url, name, theme }) => {
  const OpenURLButton = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported && url !== "") {
      await Linking.openURL(url);
    }
  }, [url]);

  return (
    <Text onPress={OpenURLButton} style={styles(theme).button}>
      {name}
    </Text>
  );
};

const styles = (theme?: ThemeType) =>
  StyleSheet.create({
    button: {
      fontSize: 22,
      fontFamily: theme && theme.fonts.medium,
      color: theme && theme.colors.black,
      textDecorationLine: "none",
    },
  });
