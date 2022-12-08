import { StatusBar } from "expo-status-bar";
import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useCachedResources, Navigation, Layout } from "./src";

export const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <RootSiblingParent>
        <SafeAreaProvider>
          <Layout>
          <Navigation />
          </Layout>
          <StatusBar />
        </SafeAreaProvider>
      </RootSiblingParent>
    );
  }
};

export default App;
