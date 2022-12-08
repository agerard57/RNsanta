import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../../homePage";

export const Navigation = () => {
  type RootTabParamList = {
    Home: undefined;
    "todo-add": undefined;
    //"todo-edit": { id: string };
  };

  const { Navigator, Screen } = createNativeStackNavigator<RootTabParamList>();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={HomePage}
          //options={{ title: "Welcome" }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
