import { publicAxios } from "../../core";

export const getLogin = async (mail: String, password: String) => {
  const url = `http://localhost:3000/user/login`;


  try {
    const response = await publicAxios.post(url, {
      mail,
      password
    });
    
    const data = await response.data;
    data.status = response.status;
    return data;
  } catch (error) {
    return [];
  }
};
