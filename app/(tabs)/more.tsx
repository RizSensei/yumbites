import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import PageHeader from "@/components/PageHeader";

const more = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <PageHeader label="More" />
    </SafeAreaView>
  );
};

export default more;
