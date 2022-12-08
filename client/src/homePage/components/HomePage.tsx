import React, { FC } from "react";
import { Text, View } from "react-native";
import { Image } from "react-native";

export const HomePage: FC = () => {
  console.log("HomePage");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={{
          uri: "https://cdn.discordapp.com/attachments/645576865850982420/1050042119475179532/6111414.png",
        }}
        style={{
          width: 200,
          height: 200,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </View>
  );
};
