import React, { FC, useContext } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { Container } from "../../core";
import { ThemeContext } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export const RegisterPage: FC = () => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: 16,
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {navigation.navigate("Register")}}>
        <Container
          additionalStyling={{
            width: "100%",
            borderRadius: 39,
            height: "auto",
            flex: 0.25,
            paddingTop: 9,
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: theme && theme.fonts.bold,
              color: theme.colors.black,
              textAlign: "center",
            }}
            >Login
          </Text>
        </Container>
      </TouchableWithoutFeedback>





      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: theme && theme.fonts.bold,
            color: theme.colors.white,
            textAlign: "center",
            paddingBottom: 33,
          }}
        >
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: theme && theme.fonts.regular,
            color: theme.colors.white,
            textAlign: "justify",
            paddingHorizontal: 20,
          }}
        >
          Registration page
        </Text>
      </View>
    </View>
  );
};
