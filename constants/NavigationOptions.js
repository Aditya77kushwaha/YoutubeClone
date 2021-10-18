import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons"; // Explanation down
import HeaderButton from "../Components/HeaderButton"; // Explanation down
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";

export const NavigationOptionsHome = (navData, HeaderHight) => {
  // Get NavData and HeaderHeight as arguments
  return {
    headerStyle: {
      backgroundColor: "White",
    },
    headerTitleStyle: {
      fontFamily: "youtube-sans-bold",
    },
    headerTintColor: "black",
    title: "YouTube",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Youtube"
          style={{ paddingLeft: 10 }}
          iconName={
            Platform.OS === "android" ? "md-logo-youtube" : "ios-logo-youtube"
          }
          color="red"
          iconSize={30}
          iconSet={Ionicons}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        {/* <Item
          title="Menu"
          iconName="cast"
          color="black"
          iconSize={24}
          iconSet={MaterialIcons}
        /> */}
        <Item
          title="Menu"
          iconName={
            Platform.OS === "android"
              ? "md-notifications-outline"
              : "ios-notifications-outline"
          }
          color="black"
          iconSize={24}
          iconSet={Ionicons}
        />
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-search" : "ios-search"}
          color="black"
          iconSize={24}
          iconSet={Ionicons}
          onPress={() => {
            navData.navigation.navigate("SearchScreen", {
              HeaderHight: HeaderHight,
            });
          }}
        />
        <Item
          title="Menu"
          iconName="account-circle"
          color="black"
          iconSize={26}
          iconSet={MaterialIcons}
        />
      </HeaderButtons>
    ),
  };
};
