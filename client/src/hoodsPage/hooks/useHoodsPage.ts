import { useState, useEffect } from "react";

import { getHoodsList } from "../services";
import { HoodsType } from "../types";

type useHoodsPageManager = (userId: string) => {
  hoods: HoodsType[];
};

export const useHoodsPage: useHoodsPageManager = (userId) => {
  const [hoods, setHoods] = useState<HoodsType[] | []>([]);

  useEffect(() => {
    getHoodsList(userId).then((hoods) => {
      setHoods(hoods);
    });
  }, []);

  return { hoods };
};
