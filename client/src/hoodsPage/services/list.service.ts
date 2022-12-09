import { publicAxios } from "../../core";
import type { HoodsType } from "../types";

export const getHoodsList = async (id: string) => {
  const url = (id: string) => `http://localhost:3000/hoods/${id}`;

  try {
    const response = await publicAxios.get(url(id));
    if (response.status === 200) return await response.data;
    else return [];
  } catch (error) {
    return [];
  }
};
