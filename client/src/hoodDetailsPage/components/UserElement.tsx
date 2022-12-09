import { Hood, UserList } from "../types";
import { FC } from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { avatarBuilder } from "../../core";
import { ThemeType } from "../../theme";

type Props = {
  item: UserList;
  currentUserList?: UserList;
  currentUserListSelector: (userId: string) => void;
  hood?: Hood;
  theme: ThemeType;
};

export const UserElement: FC<Props> = ({
  item,
  currentUserList,
  currentUserListSelector,
  hood,
  theme,
}) => {
  const name = `${
    item.userId.name.firstName
  } ${item.userId.name.lastName.replace(/(.).*/, "$1.")}`;

  const styleProps = {
    currentUserList,
    item,
    theme,
  };

  return (
    <TouchableOpacity
      style={styles({}).usersTouchableOpacity}
      onPress={() => currentUserListSelector(item.userId.id)}
    >
      <Text style={styles(styleProps).giftsNumber}>
        {hood?.gifts.reduce((nbGift, gift) => {
          if (gift.userId.id === item.userId.id) {
            nbGift = gift.gift.length;
          }
          return nbGift;
        }, 0)}
      </Text>
      <Image
        source={{
          uri: avatarBuilder(item.userId.profilePicNumber),
        }}
        style={styles(styleProps).avatar}
      />
      <Text style={styles(styleProps).textName}>{name}</Text>
    </TouchableOpacity>
  );
};

type Styles = {
  currentUserList?: UserList;
  item?: UserList;
  theme?: ThemeType;
};

const styles = ({ currentUserList, item, theme }: Styles) =>
  StyleSheet.create({
    usersTouchableOpacity: {
      alignItems: "center",
      justifyContent: "center",
      width: 100,
      height: 100,
    },
    giftsNumber: {
      position: "absolute",
      top: 0,
      right: 0,
      transform: [{ translateX: -12 }, { translateY: 2 }],
      fontFamily: theme && theme.fonts.semiBold,
      fontSize: 13,
      color:
        currentUserList?.userId === item?.userId
          ? theme && theme.colors.gray
          : theme && theme.colors.black,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 50,
      margin: 7,
      borderColor: theme && theme.colors.black,
      borderWidth: currentUserList?.userId === item?.userId ? 2 : 0,
      opacity: currentUserList?.userId === item?.userId ? 1 : 0.8,
    },
    textName: {
      fontSize: 15,
      fontFamily: theme && theme.fonts.medium,
      color:
        currentUserList?.userId === item?.userId
          ? theme && theme.colors.gray
          : theme && theme.colors.black,
    },
  });
