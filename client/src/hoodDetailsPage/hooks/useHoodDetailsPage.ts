import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { getHoodDetails } from "../services";
import { Hood, UserList } from "../types";

type useHoodsPageManager = () => {
  hood?: Hood;
  currentUserList?: UserList;
  currentUserListSelector: (userId: String) => void;
};

export const useHoodDetailsPage: useHoodsPageManager = () => {
  const [hood, setHood] = useState<Hood | undefined>(undefined);
  const [currentUserList, setCurrentUserList] = useState<UserList | undefined>(
    undefined
  );

  useEffect(() => {
    setTimeout(() => {
      const hoodId = window.location.pathname.split("/")[2];

      getHoodDetails(hoodId).then((hood) => {
        setHood(hood);
        setCurrentUserList(hood?.gifts[0]);
      });
    }, 100);
  }, []);

  const currentUserListSelector = (userId: String) => {
    setCurrentUserList(
      hood?.gifts.find((userList) => userList.userId.id === userId)
    );
  };

  return { hood, currentUserList, currentUserListSelector };
};
