import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs"; // Importing for adding a navigator to the bottom of the screen
import { createAppContainer } from "react-navigation";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Shorts from "../Screens/Shorts";
import Subsciptions from "../Screens/Subscriptions";
import VideoPlayer from "../Screens/VideoPlayer";
import Library from "../Screens/Library";
import Error from "../Screens/Error";
import { MaterialIcons } from "@expo/vector-icons";

const YoutubeNavigator = createStackNavigator({
  HomeScreen: {
    screen: Home, //                                 |
  },
  SearchScreen: {
    screen: Search,
  }, //                                               | Talked about all this much up
  VideoPlayerScreen: {
    screen: VideoPlayer, //                           |
  },
  ErrorStack: Error, //                               |
});

const YoutubeTabNavigator = createBottomTabNavigator(
  // Creating BottomTabNavigator
  {
    Home: {
      // 1st Tab with 'Home' name
      screen: YoutubeNavigator, // In this tab we want to see the entire stack and not only just the home screen.
      // So, we passed the entire stack so that we can also move between screens

      navigationOptions: {
        // Now let's add some configuration options for this tab navigator like styling and all
        tabBarIcon: (
          { tintColor } // Add a icon for the Tab name
        ) => <MaterialIcons name="home" color={tintColor} size={24} />,
      },
    },
    Shorts: {
      // 2nd Tab bar with 'Shorts' name
      screen: Shorts, // Pass the shorts screens
      navigationOptions: {
        // navigationOptions
        tabBarLabel: "Shorts",
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="home" color={tintColor} size={24} />
        ),
      },
    }, // And it goes like this untill we add all the tabs
    Create: {
      screen: () => null,
      navigationOptions: {
        title: "",
        //tabBarOnPress: ({navigation}) => {}
        tabBarIcon: ({ tintColor }) => (
          <View
            style={{
              position: "absolute",
              borderRadius: 68,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons
              name="add-circle-outline"
              color={tintColor}
              size={45}
            />
          </View>
        ),
      },
    },
    Subsciptions: {
      screen: Subsciptions,
      navigationOptions: {
        tabBarLabel: "Subscriptions",
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="subscriptions" color={tintColor} size={24} />
        ),
      },
    },
    Library: {
      screen: Library,
      navigationOptions: {
        tabBarLabel: "Library",
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="video-library" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "grey",
      style: {
        elevation: 0,
        backgroundColor: "transparent",
      },
    },
  }
);

export default createAppContainer(YoutubeTabNavigator); // As said we only pass our root navigator to the AppContainer and now this TabNavigator is the root navigator
// as it has our StackNaviagtor too in the Home tab and other tabs as well.
