import React, { FC, useContext } from "react";
import { View, StyleSheet } from "react-native";

import { ThemeContext, ThemeType } from "../../theme";
import { Countdown } from "../types";
import { CustomText } from "./CustomText";

type Props = {
  days: Countdown["days"];
};

export const DaysDisplay: FC<Props> = ({ days }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles(theme).daysContainer}>
      <View style={styles(theme).daysBackground}>
        <CustomText
          type="timer"
          theme={theme}
          additionalStyling={styles(theme).timerText}
        >
          {days}
        </CustomText>
      </View>
      <CustomText type="timerSmall" theme={theme}>
        DAYS LEFT
      </CustomText>
    </View>
  );
};

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    daysContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -50,
      marginLeft: -50,
      alignItems: "center",
    },
    daysBackground: {
      backgroundColor: theme && theme.colors.metallic,
      borderRadius: 20,
      width: "100%",
      height: "100%",
      alignItems: "center",
    },
    timerText: {
      paddingVertical: 8,
    },
  });
