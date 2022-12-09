import { EmptyHome } from "./EmptyHome";
import { EmptyHood } from "./EmptyHood";
import { EmptyClock } from "./EmptyClock";
import { FilledHome } from "./FilledHome";
import { FilledHood } from "./FilledHood";
import { FilledClock } from "./FilledClock";

export const NavbarIcons = {
  empty: {
    Home: EmptyHome,
    Hood: EmptyHood,
    Clock: EmptyClock,
  },
  filled: {
    Home: FilledHome,
    Hood: FilledHood,
    Clock: FilledClock,
  },
};
