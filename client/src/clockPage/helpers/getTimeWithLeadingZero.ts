export const timeWithLeadingZero = (time: number) => {
  return time < 10 ? `0${time}` : time;
};
