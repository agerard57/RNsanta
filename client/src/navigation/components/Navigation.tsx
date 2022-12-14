import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ClockPage } from "../../clockPage";
import { HomePage } from "../../homePage";
import { HoodDetailsPage } from "../../hoodDetailsPage";
import { HoodsPage } from "../../hoodsPage";
import { Layout } from "../../layout";
import { LoginPage, RegisterPage } from "../../authPages";
import { RootTabParamList } from "../../types";
import { LinkingConfiguration } from "./LinkingConfiguration";
import { View, StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const Navigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator<RootTabParamList>();

  const NavContainerTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={NavContainerTheme}
    >
      <Layout>
        <View style={styles().view}>
          <Navigator initialRouteName="Home">
            <Screen
              name="Home"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Screen
              name="Hoods"
              component={HoodsPage}
              options={{ headerShown: false }}
            />
            <Screen
              name="Clock"
              component={ClockPage}
              options={{ headerShown: false }}
            />
            <Screen
              name="Login"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Screen
              name="Register"
              component={RegisterPage}
              options={{ headerShown: false }}
            />
            <Screen
              name="HoodDetails"
              component={HoodDetailsPage}
              options={{ headerShown: false }}
            />
          </Navigator>
        </View>
      </Layout>
    </NavigationContainer>
  );
};

const styles = (theme?: ThemeType) =>
  StyleSheet.create({
    view: {
      overflow: "scroll",
      flex: 1,
    },
  });
