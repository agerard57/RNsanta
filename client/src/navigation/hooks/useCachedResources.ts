import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "Baloo2-Regular": require("../../../fonts/baloo2/Baloo2-Regular.ttf"),
          "Baloo2-Bold": require("../../../fonts/baloo2/Baloo2-Bold.ttf"),
          "Baloo2-Medium": require("../../../fonts/baloo2/Baloo2-Medium.ttf"),
          "Baloo2-SemiBold": require("../../../fonts/baloo2/Baloo2-SemiBold.ttf"),
          "Baloo2-ExtraBold": require("../../../fonts/baloo2/Baloo2-ExtraBold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};
