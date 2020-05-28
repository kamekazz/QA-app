import * as React from "react";
import { Platform, StatusBar, View, Text } from "react-native";

import { Provider } from "react-redux";
import { store } from "./store";

import RootNavigator from "./Router/rootRouter";
import { COLORS } from "./constants/Colors";

export default function App(props) {
  // const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // // Load any resources or data that we need prior to rendering the app
  // React.useEffect(() => {
  //   async function loadResourcesAndDataAsync() {
  //     try {
  //       SplashScreen.preventAutoHide();

  //       // Load fonts
  //       await Font.loadAsync({
  //         ...Ionicons.font,
  //         "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
  //       });
  //     } catch (e) {
  //       // We might want to provide this error information to an error reporting service
  //       console.warn(e);
  //     } finally {
  //       setLoadingComplete(true);
  //       SplashScreen.hide();
  //     }
  //   }

  //   loadResourcesAndDataAsync();
  // }, []);

  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="default" backgroundColor={COLORS.primary} />
        <RootNavigator />
      </Provider>
    </>
  );
}
