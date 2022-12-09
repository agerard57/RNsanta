import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { userNotLogged } from "../data";
import { LoggedUser } from "../types";

type UseAuthManager = () => {
  user: LoggedUser;
  isUserLogged: boolean;
  logOut: () => void;
};

export const useAuth: UseAuthManager = () => {
  const [user, setUser] = useState<LoggedUser>(userNotLogged);
  const navigation = useNavigation();

  const isUserLogged = user.id !== userNotLogged.id;

  const logOut = () => {
    setUser(userNotLogged);
    localStorage.removeItem("user");
    navigation.navigate("Login");
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user") || ""));
    }
  }, [navigation]);

  return { user, isUserLogged, logOut };
};
