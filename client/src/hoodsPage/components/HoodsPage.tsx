import React, { FC, useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { getHoodsList } from "../services";
import type { HoodsType } from "../types";

export const HoodsPage: FC = () => {
  const [hoods, setHoods] = useState<HoodsType[] | []>([
    {
      name: "Deez",
      hexColor: "#F7484C",
      nbMembers: 2,
    },
  ]);

  useEffect(() => {
    getHoodsList("6391ee3458827b959ba18363").then((hoods) => {
      setHoods(hoods);
    });
  }, []);

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
      {hoods.map((hood, key) => (
        <View key={key}>
          <Text>{hood.name}</Text>
          <Text>{hood.hexColor}</Text>
          <Text>{hood.nbMembers}</Text>
        </View>
      ))}
    </View>
  );
};
