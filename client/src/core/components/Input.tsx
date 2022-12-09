import { useLinkProps } from "@react-navigation/native";
import { Component, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";
import { StyleProp, View, ViewStyle, StyleSheet, Text, TextInput, TextInputProps } from "react-native";
import { ThemeContext, ThemeType } from "../../theme";

type Props = {
  label: String;
  additionalStyling?: StyleProp<ViewStyle>;
  textInputParams?: TextInputProps;
  inputValue: String,
  updateInputValue: Dispatch<SetStateAction<String>>
};


export const Input: FC<Props> = ({ label, additionalStyling, textInputParams, inputValue, updateInputValue }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[ additionalStyling, {
      width: "100%",
      marginVertical: "0.75rem",
    } ]}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: theme && theme.fonts.semiBold,
          color: theme.colors.black,
          textAlign: "left",
          marginLeft: "0.6rem",
        }}>
        {label}
      </Text>
      <TextInput 
      onChangeText={(input) => updateInputValue(input)}
        {...textInputParams}
        style={{
          backgroundColor: theme.colors.white,
          width: "100%",
          height: "2.5em",
          marginTop: "0.5rem",
          borderRadius: 10,
          paddingHorizontal: 15,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
        />
    </View>
  );
};
