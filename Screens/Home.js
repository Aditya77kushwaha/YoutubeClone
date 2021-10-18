import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { NavigationOptionsHome } from "../constants/NavigationOptions";
import { Header } from "react-navigation-stack"; // used to get Header  Height for some styling

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

Home.navigationOptions = (navData) => {
  return NavigationOptionsHome(navData, Header.HEIGHT);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
