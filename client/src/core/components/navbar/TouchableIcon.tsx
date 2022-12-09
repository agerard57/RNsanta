import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";

import { RootTabParamList } from "../../../types";
import { NavbarIcons } from "../../assets";

type Props = {
  route: keyof RootTabParamList;
};

export const TouchableIcon = ({ route }: Props) => {
  const navigation = useNavigation();

  const NavBarIcon = NavbarIcons[route as keyof typeof NavbarIcons];

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(route as any);
      }}
    >
      <NavBarIcon />
    </TouchableOpacity>
  );
};
