import CartItem from "@/components/CartItem";
import PageHeader from "@/components/PageHeader";
import { showToastForEmptyCart } from "@/components/toast";
import { themeColors } from "@/constants/Colors";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const cart = () => {
  const { cartItems, cartTotal } = useCart();
  const router = useRouter();

  let delivery_charge = useMemo(
    () => (0.05 * cartTotal).toFixed(2),
    [cartTotal]
  );
  let total_charge_after_delivery = useMemo(
    () => parseFloat(delivery_charge) + parseFloat(cartTotal),
    [delivery_charge, cartTotal]
  );

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      showToastForEmptyCart();
    } else {
      router.push("/(screens)/CartSummaryScreen");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <PageHeader label="Your Cart" backOption={true} />
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <CartItem item={item} />}
            ListEmptyComponent={
              <View
                style={{
                  height: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={{ backgroundColor: "inherit", opacity: 0.5 }}>
                  <Image
                    style={{ height: 100 }}
                    resizeMode="contain"
                    source={require("../../assets/images/shopping-cart-empty-side-view.png")}
                  />
                </View>
              </View>
            }
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
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              onPress={handlePlaceOrder}
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
