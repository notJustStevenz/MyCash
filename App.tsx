import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';


// react navigation
import RootStack from './navigators/RootStack';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  // Load the font `Inter_500Medium`
  const [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Hide the splash screen after the fonts have loaded and the
      // UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Prevent rendering until the font has loaded
  if (!fontsLoaded) {
    return null;
  }

  // Render the children routes now that all the assets are loaded.
  return <RootStack />;
}

// export default function App() {
//   let [fontsLoaded] = useFonts({
//     "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
//     "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
//   });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   };

//   return (
//     <RootStack/>
//   );
// }