import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import YoutubeNavigator from "./navigation/YoutubeNavigation"; // with the help of 'createAppContainer', its only a component now

const FetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "youtube-sans-bold": require("./assets/fonts/youtube-sans-bold.ttf"),
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

export default function App() {
  const [fontloaded, setfontloaded] = useState(false);
  if (!fontloaded) {
    return (
      <AppLoading
        startAsync={FetchFonts}
        onFinish={() => {
          setfontloaded(true);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }
  return (
    <YoutubeNavigator /> // Show that component
  );
}
