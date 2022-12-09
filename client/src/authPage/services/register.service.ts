import { publicAxios } from "../../core";


export const postUser = async (
  firstName: FormDataEntryValue | null,
  lastName: FormDataEntryValue | null,
  mail: FormDataEntryValue | null,
  password: FormDataEntryValue | null
  ) => {
  const url = `http://localhost:3000/user`;

  try {
    const response = await publicAxios.post(url, {
      firstName,
      lastName,
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
  