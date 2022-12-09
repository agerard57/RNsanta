import React, { FC, Fragment, useContext } from "react";
import { View, StyleSheet } from "react-native";

import { ThemeContext, ThemeType } from "../../theme";
import { Countdown } from "../types";
import { CustomText } from "./CustomText";

export const TimerDisplay: FC<Omit<Countdown, "days">> = ({
  hours,
  minutes,
  seconds,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <View style={styles(theme).timerContainer}>
      <View style={styles(theme).timerRow}>
        {["HH", "MM", "SS"].map((time, index) => (
          <CustomText
            type="timerSmall"
            theme={theme}
            key={index}
            additionalStyling={styles(theme).timerText}
          >
            {time}
          </CustomText>
        ))}
      </View>
      <View style={styles(theme).timerBackground}>
        {[hours, minutes, seconds].map((time, index) => (
          <Fragment key={index}>
            <CustomText
              type="timer"
              theme={theme}
              key={index}
              additionalStyling={styles(theme).separator}
            >
              {time}
            </CustomText>
            {index !== 2 && (
              <CustomText type="timerSmall" theme={theme}>
                :
              </CustomText>
            )}
          </Fragment>
        ))}
      </View>
    </View>
  );
};

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    timerContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      marginBottom: 0,
      marginLeft: 0,
      alignItems: "center",
    },
    timerRow: { flexDirection: "row" },
    timerText: {
      alignItems: "center",
      justifyContent: "space-evenly",
      paddingHorizontal: 46,
    },
    timerBackground: {
      backgroundColor: theme && theme.colors.metallic,
      borderRadius: 20,
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    separator: {
      paddingVertical: 8,
    },
  });
