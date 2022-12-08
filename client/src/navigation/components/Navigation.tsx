import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../../homePage";
import { HoodsPage } from "../../hoodsPage";
import { RootTabParamList } from "../../types";
import { Layout } from "../../layout";

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
    <NavigationContainer theme={NavContainerTheme}>
      <Layout>
        <Navigator initialRouteName="Home">
          <Screen
            name="Home"
            component={HomePage}
            //options={{ title: "Welcome" }}
            options={{ headerShown: false }}
          />
          <Screen
            name="Hoods"
            component={HoodsPage}
            options={{ headerShown: false }}
          />
        </Navigator>
      </Layout>
    </NavigationContainer>
  );
};
