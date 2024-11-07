import CartItem from "@/components/CartItem";
import PageHeader from "@/components/PageHeader";
import { showToastForEmptyCart } from "@/components/toast";
import { themeColors } from "@/constants/Colors";
import { useCart } from "@/hooks/useCart";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const cart = () => {
  const { cartItems, cartTotal } = useCart();
  const router = useRouter();

  let delivery_charge = (0.05 * cartTotal).toFixed(2);
  let total_charge_after_delivery =
    parseFloat(delivery_charge) + parseFloat(cartTotal);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <PageHeader label="Your Cart" backOption={true} />
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <CartItem item={item} />}
          />
        </View>
        <View
          style={{
            backgroundColor: themeColors.bgColor(0.2),
            paddingVertical: 24,
            paddingHorizontal: 32,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            gap: 5,
          }}
        >
          <View className="flex-row justify-between">
            <Text className="text-gray-700"> Subtotal </Text>
            <Text className="text-gray-700"> ${cartTotal} </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700"> Delivery Fee </Text>
            <Text className="text-gray-700"> ${delivery_charge} </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700 font-extrabold"> Order Total </Text>
            <Text className="text-gray-700 font-extrabold">
              {" "}
              ${total_charge_after_delivery}{" "}
            </Text>
          </View>
          <View style={{marginTop:10}}>
            <TouchableOpacity
              onPress={
                cartItems.length === 0
                  ? showToastForEmptyCart
                  : () => router.push("/(screens)/CartSummaryScreen")
              }
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className="p-3 rounded-full"
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default cart;
