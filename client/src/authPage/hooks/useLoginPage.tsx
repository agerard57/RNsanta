import { useState, useEffect } from "react";
import { getLogin } from "../services";
import { LoginType } from "../types";


export const useLoginPage = (mail: String, password: String) => {
  const [user, setUser] = useState();

  useEffect(() => {
    getLogin(mail, password).then((user) => {
      setUser(user);
    });
  }, []);

  return { user };
};
