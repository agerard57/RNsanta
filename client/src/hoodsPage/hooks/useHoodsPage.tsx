import { useState, useEffect } from "react";
import { getHoodsList } from "../services";
import { HoodsType } from "../types";

type useUseHoodsPage = () => {
  hoods: HoodsType[];
};

export const useHoodsPage: useUseHoodsPage = () => {
  const [hoods, setHoods] = useState<HoodsType[] | []>([]);

  useEffect(() => {
    getHoodsList("6391ee3458827b959ba18363").then((hoods) => {
      setHoods(hoods);
    });
  }, []);

  return { hoods };
};
