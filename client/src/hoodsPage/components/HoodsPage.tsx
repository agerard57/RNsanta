import React, { FC } from "react";
import { Text, View, Image } from "react-native";

export const HoodsPage: FC = () => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
      }}
    >
      <Image
        source={{
          uri: "https://cdn.discordapp.com/attachments/645576865850982420/1050042119475179532/6111414.png",
        }}
        style={{
          width: 400,
          height: 200,
        }}
      />
    </View>
  );
};
