import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import PageHeader from "@/components/PageHeader";

const FavouritesScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <PageHeader label="Your Favourites" backOption={true} />

      <Text>FavouriteScreen</Text>
    </SafeAreaView>
  );
};

export default FavouritesScreen;
