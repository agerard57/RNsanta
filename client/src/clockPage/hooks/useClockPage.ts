import { useState, useEffect } from "react";

import { timeWithLeadingZero } from "../helpers";
import { Countdown } from "../types";

type UseClockPageManager = () => {
  countdown: Countdown;
};

export const useClockPage: UseClockPageManager = () => {
  const startDate = new Date();
  const christmasDay =
    new Date().getMonth() === 11 && new Date().getDate() > 25
      ? new Date().getFullYear() + 1
      : new Date().getFullYear();
  const endDate = new Date(`December 25, ${christmasDay} 00:00:00`);

  const [distance, setDistance] = useState<number>(
    endDate.getTime() - startDate.getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newDistance = endDate.getTime() - new Date().getTime();
      setDistance(newDistance);
    }, 1000);

    () => () => clearInterval(interval);
  }, []);

  const countdown: Countdown = {
    days: timeWithLeadingZero(Math.floor(distance / (1000 * 60 * 60 * 24))),
    hours: timeWithLeadingZero(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ),
    minutes: timeWithLeadingZero(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    ),
    seconds: timeWithLeadingZero(Math.floor((distance % (1000 * 60)) / 1000)),
  };

  return {
    countdown,
  };
};
