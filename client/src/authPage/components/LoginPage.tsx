import { useNavigation } from "@react-navigation/native";
import React, { FC, useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { Container, Input, TopButton } from "../../core";
import { ThemeContext, ThemeType } from "../../theme";
import { useLoginPage } from "../hooks/useLoginPage";

export const LoginPage: FC = () => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  const { userValue, setUserValue, handleSubmit } = useLoginPage();

  return (
    <View style={styles().view}>
      <TopButton additionalStyling={styles().addButton} route={"Register"}>
        <Text style={styles(theme).addButtonTextTop}>Register</Text>
      </TopButton>

      <Container additionalStyling={styles().container}>
        <Input
          label="Mail :"
          textInputParams={{
            textContentType: "emailAddress",
            autoComplete: "email",
          }}
          updateInputValue={(text) =>
            setUserValue({ ...userValue, mail: text })
          }
        />
        <Input
          label="Password :"
          textInputParams={{
            textContentType: "password",
            secureTextEntry: true,
            autoComplete: "password",
          }}
          updateInputValue={(text) =>
            setUserValue({ ...userValue, password: text })
          }
        />
        <TouchableOpacity onPress={() => handleSubmit()} style={styles().loginButtonContainer}>
          <Container additionalStyling={styles(theme).loginButton}>
            <Text style={styles(theme).loginButtonText}>Login</Text>
          </Container>
        </TouchableOpacity>
      </Container>
    </View>
  );
};

const styles = (theme?: ThemeType) =>
  StyleSheet.create({
    addButton: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      borderRadius: 39,
      paddingVertical: 16,
      padding: 0,
    },
    addButtonTextTop: {
      fontSize: 24,
      fontFamily: theme && theme.fonts.extraBold,
      color: theme && theme.colors.black,
    },
    loginButtonContainer: {
      width: "100%",
    },
    loginButton: {
      backgroundColor: theme && theme.colors.blue,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      borderRadius: 39,
      padding: 7,
      marginTop: "2rem",
    },
    loginButtonText: {
      color: "#FFFFFF",
      fontSize: 20,
      fontFamily: theme && theme.fonts.semiBold,
    },
    view: {
      paddingHorizontal: 16,
      alignItems: "center",
      backgroundColor: "transparent",
    },
    container: {
      marginTop: "2rem",
      width: "100%",
      borderRadius: 39,
      alignItems: "flex-start",
    },
  });
