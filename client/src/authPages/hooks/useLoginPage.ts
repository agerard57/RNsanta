import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

import { postLogin } from "../services";
import { InputLoginType } from "../types";

type UseLoginPageManager = () => {
  userValue: InputLoginType;
  setUserValue: React.Dispatch<React.SetStateAction<InputLoginType>>;
  handleSubmit: () => void;
};

export const useLoginPage: UseLoginPageManager = () => {
  const [userValue, setUserValue] = useState<InputLoginType>({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (userValue.email && userValue.password) {
      postLogin(userValue.email, userValue.password).then(async (response) => {
        if (response.status === 200) {
          response.data.user.email = userValue.email;
          const dataJSON = JSON.stringify(response.data.user);

          await AsyncStorage.setItem("user", dataJSON).then(() => {
            window.location.reload();
          });
        }
      });
    }
  };

  return { userValue, setUserValue, handleSubmit };
};
