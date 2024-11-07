import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

const OrderPreparingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    },3000)
  })
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View className="flex-1 bg-white justify-center items-center">
        <Image
          source={require("../../assets/images/Take Away.gif")}
          className="h-80 w-80"
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderPreparingScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
