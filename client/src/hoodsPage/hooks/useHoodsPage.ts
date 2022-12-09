import { useState, useEffect } from "react";
import { useAuth } from "../../authPages";

import { getHoodsList } from "../services";
import { HoodsType } from "../types";

type UseHoodsPageManager = () => {
  hoods: HoodsType[];
};

export const useHoodsPage: UseHoodsPageManager = () => {
  const { user } = useAuth();
  const [hoods, setHoods] = useState<HoodsType[] | []>([]);

  useEffect(() => {
    getHoodsList(user.id).then((hoods) => {
      setHoods(hoods);
    });
  }, [user]);

  return { hoods };
};
