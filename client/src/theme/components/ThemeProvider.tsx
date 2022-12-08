import { FC, ReactNode } from "react";

import { ThemeContext } from "../contexts";
import { theme } from "../data";

type Props = {
  children: ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
