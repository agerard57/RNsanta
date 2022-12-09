import { useNavigation } from "@react-navigation/native";
import React, { FC, useContext, useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

import { Container, Input, TopButton } from "../../core";
import { ThemeContext, ThemeType } from "../../theme";
import { useLoginPage } from "../hooks/useLoginPage";

export const LoginPage: FC = () => {

  const theme = useContext(ThemeContext);
  const navigation = useNavigation();
  
  const { userValue, setUserValue, handleSubmit } = useLoginPage();

  return (
    <View
      style={{
        paddingHorizontal: 16,
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <TopButton additionalStyling={styles().addButton} route={"Register"}>
        <Text style={styles(theme).addButtonTextTop}>Register</Text>
      </TopButton>

          updateInputValue={(text) =>
            setUserValue({ ...userValue, mail: text })
          }
        />
          updateInputValue={(text) =>
            setUserValue({ ...userValue, password: text })
          }
        />
        <TouchableOpacity onPress={() => handleSubmit()}>
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
    }
  });
