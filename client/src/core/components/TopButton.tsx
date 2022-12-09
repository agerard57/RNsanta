import { useNavigation } from "@react-navigation/native";
import React, { FC, ReactNode } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

import { RootTabParamList } from "../../types";
import { Container } from "./Container";

type Props = {
  children: ReactNode;
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
      onPress={() => navigation.navigate(route as any)}
    >
      <Container additionalStyling={[additionalStyling, { paddingTop: 16 }]}>
        {children}
      </Container>
    </TouchableOpacity>
  );
};
