import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { postLogin } from "../services";
import { InputLoginType } from "../types";

type UseLoginPageManager = () => {
  userValue: InputLoginType;
  setUserValue: React.Dispatch<React.SetStateAction<InputLoginType>>;
  handleSubmit: () => void;
};

export const useLoginPage: UseLoginPageManager = () => {
  const navigation = useNavigation();

  const [userValue, setUserValue] = useState<InputLoginType>({
    mail: "",
    password: "",
  });

  const handleSubmit = () => {
    if (userValue.mail && userValue.password) {
      postLogin(userValue.mail, userValue.password).then(async (response) => {
        if (response.status === 200) {
          response.data.user.mail = userValue.mail;
          const dataJSON = JSON.stringify(response.data.user);

          await AsyncStorage.setItem("user", dataJSON).then(() => {
            navigation.navigate("Login");
          });
        }
      });
    }
  };

  return { userValue, setUserValue, handleSubmit };
};
