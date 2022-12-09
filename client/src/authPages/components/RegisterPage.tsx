import React, { FC, useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { Container, Input, TopButton } from "../../core";
import { ThemeContext, ThemeType } from "../../theme";
import { useRegisterPage } from "../hooks";

export const RegisterPage: FC = () => {
  const theme = useContext(ThemeContext);
  const { userValue, setUserValue, handleSubmit } = useRegisterPage();

  return (
    <View style={styles().view}>
      <TopButton additionalStyling={styles().addButton} route={"Login"}>
        <Text style={styles(theme).addButtonTextTop}>Login</Text>
      </TopButton>

      <Container additionalStyling={styles().container}>
        <Input
          label="First name :"
          textInputParams={{
            autoComplete: "name",
          }}
          updateInputValue={(text) =>
            setUserValue({ ...userValue, firstName: text })
          }
        />
        <Input
          label="Last name :"
          textInputParams={{
            autoComplete: "name-family",
          }}
          updateInputValue={(text) =>
            setUserValue({ ...userValue, lastName: text })
          }
        />
        <Input
          label="Email :"
          textInputParams={{
            textContentType: "emailAddress",
            autoComplete: "email",
            keyboardType: "email-address",
          }}
          updateInputValue={(text) =>
            setUserValue({ ...userValue, email: text })
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
        <Input
          label="Confirm password :"
          textInputParams={{
            textContentType: "password",
            secureTextEntry: true,
            autoComplete: "password",
          }}
          updateInputValue={(text) =>
            setUserValue({ ...userValue, confirmPassword: text })
          }
        />
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={styles().registerButtonContainer}
        >
          <Container additionalStyling={styles(theme).registerButton}>
            <Text style={styles(theme).registerButtonText}>Register</Text>
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
      paddingBottom: 16,
      padding: 0,
    },
    addButtonTextTop: {
      fontSize: 24,
      fontFamily: theme && theme.fonts.extraBold,
      color: theme && theme.colors.black,
    },
    registerButtonContainer: {
      width: "100%",
    },
    registerButton: {
      backgroundColor: theme && theme.colors.blue,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      borderRadius: 39,
      padding: 7,
      marginTop: "2rem",
    },
    registerButtonText: {
      color: "#FFFFFF",
      fontSize: 20,
      fontFamily: theme && theme.fonts.semiBold,
    },
    container: {
      width: "100%",
      borderRadius: 39,
      alignItems: "flex-start",
    },
    view: {
      paddingHorizontal: 16,
      alignItems: "center",
      backgroundColor: "transparent",
      marginBottom: "0.25rem",
    },
  });
