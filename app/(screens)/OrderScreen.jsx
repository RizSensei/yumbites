import PageHeader from "@/components/PageHeader";
import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";

const OrderScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <PageHeader label="Your Orders" backOption={true} />

      <Text>OrderScreen</Text>
    </SafeAreaView>
  );
};

export default OrderScreen;
