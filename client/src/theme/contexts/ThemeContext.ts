import { createContext } from "react";

import { theme } from "../data";
import { ThemeType } from "../types";

export const ThemeContext = createContext<ThemeType>(theme);
