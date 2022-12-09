import { useContext } from "react";
import { useAuth } from "../../authPages";
import { ThemeContext, ThemeType } from "../../theme";
import { Text, StyleSheet } from "react-native";

export const EmptyHoodList = () => {
  const theme = useContext(ThemeContext);
  const { isUserLogged } = useAuth();

  const message = isUserLogged
    ? "You have no hoods yet..."
    : "You need to log in to see your hoods...";

  return <Text style={styles(theme).emptyHoods}>{message}</Text>;
};

const styles = (theme?: ThemeType) =>
  StyleSheet.create({
    emptyHoods: {
      fontSize: 24,
      fontFamily: theme && theme.fonts.extraBold,
      color: theme && theme.colors.black,
      padding: 20,
      textAlign: "center",
    },
  });
