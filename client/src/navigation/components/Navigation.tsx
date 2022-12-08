import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Text, View } from "react-native";

export const Navigation = () => {
  const Stack = createNativeStackNavigator<RootTabParamList>();
  type RootTabParamList = {
    home: undefined;
    Home: undefined;
    "todo-add": undefined;
    "todo-edit": { id: string };
    "todo-view": { id: string };
    notFound: undefined;
    about: undefined;
  };

  const Home: FC = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Home Screen</Text>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
