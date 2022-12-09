import { useNavigation } from "@react-navigation/native";
import React, { FC, useContext } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useAuth } from "../../authPages";

import { ThemeContext, ThemeType } from "../../theme";
import { avatarBuilder } from "../helpers";

export const Header: FC = (props) => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();
  const { user, isUserLogged, logOut } = useAuth();

  return (
    <View style={styles().headerContainer}>
      <Text style={styles(theme).pageTitle}>Santa's Hood</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          isUserLogged ? logOut() : navigation.navigate("Login");
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles(theme).userName}>{user.name.firstName}</Text>
          <Image
            source={{
              uri: avatarBuilder(user.profilePicNumber),
            }}
            style={styles().profilePic}
          />
        </View>
      </TouchableWithoutFeedback>
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
