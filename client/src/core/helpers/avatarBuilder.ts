import { pp } from "../assets";

export const avatarBuilder = (profilePicNumber: number) => {
  const avatar =
    pp.find((avatar) => avatar.id === profilePicNumber.toString()) || pp[0];
  return avatar.imageLink;
};
