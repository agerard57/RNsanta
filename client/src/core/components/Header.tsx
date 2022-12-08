import React, { FC, useContext } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { ThemeContext, ThemeType } from "../../theme";

export const Header: FC = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles().headerContainer}>
      <Text style={styles(theme).pageTitle}>Santa's Hood</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles(theme).userName}>Padoru</Text>
        <Image
          source={{
            uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4236d1d9-6a66-4488-ab28-bf744b693173/ddn54uv-2d9156a6-6e13-45f4-a2f5-e0c8fb637418.jpg",
          }}
          style={styles().profilePic}
        />
      </View>
    </View>
  );
};

const styles = (theme?: ThemeType) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 20,
      paddingBottom: 40,
    },
    pageTitle: {
      fontSize: 24,
      fontFamily: theme && theme.fonts.bold,
      color: theme && theme.colors.white,
    },
    userName: {
      fontSize: 18,
      fontFamily: theme && theme.fonts.medium,
      color: theme && theme.colors.white,
    },
    profilePic: {
      width: 40,
      height: 40,
      borderRadius: 50,
      marginLeft: 14,
    },
  });
