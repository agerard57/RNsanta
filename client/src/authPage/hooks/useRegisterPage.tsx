import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { postUser } from "../services/register.service";
import { InputRegisterType } from "../types";

type UseRegisterPageManager = () => {
  userValue: InputRegisterType;
  setUserValue: React.Dispatch<React.SetStateAction<InputRegisterType>>;
  handleSubmit: () => void;
};

export const useRegisterPage: UseRegisterPageManager = () => {
  const navigation = useNavigation();

  const [userValue, setUserValue] = useState<InputRegisterType>({
    firstName: "",
    lastName: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async () => {
    if (
      userValue.mail &&
      userValue.password &&
      userValue.confirmPassword &&
      userValue.firstName &&
      userValue.lastName &&
      userValue.password == userValue.confirmPassword
    ) {
      postUser(
        userValue.firstName,
        userValue.lastName,
        userValue.mail,
        userValue.password
      ).then(async (response) => {
        if (response.status === 200) {
          navigation.navigate("Home");
        }
      });
    }
  };

  return { userValue, setUserValue, handleSubmit };
};
