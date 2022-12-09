import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useCachedResources, Navigation, ThemeProvider } from "./src";

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <RootSiblingParent>
        <SafeAreaProvider style={styles.safeArea}>
          <ThemeProvider>
            <Navigation />
          </ThemeProvider>
          <StatusBar />
        </SafeAreaProvider>
      </RootSiblingParent>
    );
  }
};

const styles = StyleSheet.create({
  safeArea: {
    overflow: "hidden",
  },
});

export default App;
