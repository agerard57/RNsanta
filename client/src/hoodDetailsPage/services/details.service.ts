import { publicAxios } from "../../core";

export const getHoodDetails = async (id: string) => {
  const url = (id: string) => `http://localhost:3000/hood/${id}`;

  try {
    const response = await publicAxios.get(url(id));
    return await response.data;
  } catch (error) {
    return [];
  }
};
