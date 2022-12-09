import React, { FC, useContext } from "react";
import { Text, View, Image } from "react-native";

import { Container } from "../../core";
import { ThemeContext } from "../../theme";

export const HomePage: FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <View
      style={{
        paddingHorizontal: 16,
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <Container
        additionalStyling={{
          width: "100%",
          borderRadius: 39,
          paddingVertical: 20,
          marginBottom: 40,
        }}
      >
        <Image
          source={{
            uri: "https://cdn.discordapp.com/attachments/645576865850982420/1050042119475179532/6111414.png",
          }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </Container>
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
          Welcome to Santa’s Hood, Parodu!
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
          This wonderful app will help you and your relatives list the perfect
          presents for Christmas.{"\n\n"}No more hassle in finding your perfect
          gift!
        </Text>
      </View>
    </View>
  );
};
