import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { RootTabParamList } from "../../types";
import { Container } from "./Container";

type Props = {
  children: React.ReactNode;
  additionalStyling?: StyleProp<ViewStyle>;
  route: keyof RootTabParamList;
};

export const TopButton: FC<Props> = ({
  children,
  route,
  additionalStyling,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={additionalStyling}
      onPress={() => navigation.navigate(route)}
    >
      <Container additionalStyling={[additionalStyling, { paddingTop: 16 }]}>
        {children}
      </Container>
    </TouchableOpacity>
  );
};
