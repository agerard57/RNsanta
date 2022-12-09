import { FC } from "react";
import { StyleSheet, Text, Image } from "react-native";

import { Container } from "../../core";
import { ThemeType } from "../../theme";
import { LinkSvg } from "../assets";
import { Gift } from "../types";
import { OpenURLButton } from "./OpenURLButton";

type Props = {
  item: Gift;
  theme: ThemeType;
};

export const GiftElement: FC<Props> = ({ item, theme }) => (
  <Container additionalStyling={styles(theme).giftContainer}>
    <Text style={styles(theme).textPrice}>${item.price}</Text>
    <OpenURLButton
      url={item.url}
      name={item.name}
      theme={theme}
    ></OpenURLButton>
    {item.url && (
      <Image
        source={{
          uri: LinkSvg,
        }}
        style={styles(theme).linkSvg}
      />
    )}
  </Container>
);

const styles = (theme?: ThemeType) =>
  StyleSheet.create({
    giftContainer: {
      display: "flex",
      flexDirection: "row",
      elevation: 0,
      shadowOpacity: 0,
      borderWidth: 1,
      borderColor: theme && theme.colors.metallic,
      borderRadius: 39,
      marginVertical: "1rem",
    },
    textPrice: {
      backgroundColor: theme && theme.colors.metallic,
      borderRadius: 39,
      paddingHorizontal: "0.45rem",
      paddingVertical: "0.3rem",
      marginRight: "0.5rem",
      fontFamily: theme && theme.fonts.bold,
      minWidth: "3rem",
      textAlign: "center",
    },
    linkSvg: {
      width: 15,
      height: 15,
      position: "absolute",
      right: 30,
      verticalAlign: "middle",
    },
  });
