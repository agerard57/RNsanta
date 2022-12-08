import React, { FC } from "react";
import { Text, View, Image } from "react-native";

export const Header: FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Santa's Hood</Text>

      <Image
        source={{
          uri: "https://www.deviantart.com/turnip007/art/FREE-Padoru-Base-PSD-OPEN-824931031",
        }}
      />
    </View>
  );
};
