import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootTabParamList } from "../../types";

export const LinkingConfiguration: LinkingOptions<RootTabParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Home: "home",
      Hoods: "hoods",
      Clock: "clock",
      HoodDetails: "hood/:id",
    },
  },
};
