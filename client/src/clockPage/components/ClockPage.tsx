import React, { FC, useContext } from "react";
import { View, StyleSheet } from "react-native";

import { Container, PageTitle } from "../../core";
import { ThemeContext, ThemeType } from "../../theme";
import { useClockPage } from "../hooks";
import { CustomText } from "./CustomText";
import { DaysDisplay } from "./DaysDisplay";
import { TimerDisplay } from "./TimerDisplay";

export const ClockPage: FC = () => {
  const theme = useContext(ThemeContext);

  const { countdown } = useClockPage();

  return (
    <View style={styles().page}>
      <PageTitle
        additionalStyling={styles().title}
        title="Christmas countdown"
      />
      <Container additionalStyling={styles().clock}>
        <CustomText type="main" theme={theme}>
          Countdown before Santa Claus comes down your chimney!
        </CustomText>
        <DaysDisplay days={countdown.days} />
        <TimerDisplay
          {...{
            hours: countdown.hours,
            minutes: countdown.minutes,
            seconds: countdown.seconds,
          }}
        />
      </Container>
    </View>
  );
};

const styles = (theme?: ThemeType) =>
  StyleSheet.create({
    page: {
      paddingHorizontal: 16,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    title: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      borderRadius: 39,
      paddingBottom: 16,
      padding: 0,
    },
    clock: {
      width: "100%",
      borderRadius: 39,
      marginBottom: 56,
      padding: 30,
      overflow: "hidden",
    },
  });
