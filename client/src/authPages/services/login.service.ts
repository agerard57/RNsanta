import { publicAxios } from "../../core";

export const postLogin = async (
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null
) => {
  const url = `http://localhost:3000/user/login`;

  try {
    const response = await publicAxios.post(url, {
      email,
      password,
    });

    const data = await response.data;
    data.status = response.status;
    return data;
  } catch (error) {
    return [];
  }
};
