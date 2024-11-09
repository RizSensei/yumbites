import PageHeader from "@/components/PageHeader";
import { themeColors } from "@/constants/Colors";
import { useCart } from "@/hooks/useCart";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const CartSummaryScreen = () => {
  const { cartItems, cartTotal } = useCart();

  let delivery_charge = (0.05 * cartTotal).toFixed(2);
  let total_charge_after_delivery =
    parseFloat(delivery_charge) + parseFloat(cartTotal);

  return (
    <SafeAreaView  style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
     <PageHeader label="Cart Summary" backOption={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
        className="bg-white pt-5"
      >
        {cartItems.map((item, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mt-2"
            >
              <Text className="font-bold" style={{ color: themeColors.text, fontWeight:'bold', marginRight:10 }}>
                {item.quantity}x
              </Text>
              <Image
                className="h-8 w-8 rounded-full"
                source={{ uri: item.image }}
                style={{ marginRight:10 }}
              />
              <Text className="flex-1 font-bold text-gray-700">
                {item.name}
              </Text>
              <View className="flex-row items-center">
                <Text
                  style={{ color: themeColors.text }}
                  className="px-3 font-semibold"
                >
                  ${item.price * item.quantity}
                </Text>
              </View>
            </View>
          );
        })}

        <View
          style={{
            flex: 1,
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: "gray",
          }}
        ></View>

        <View
          style={{
            width: "100%",
            marginTop: 20,
            paddingHorizontal: 20,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Text>
            <Text style={{ fontWeight: "bold" }}>Delivery Charges: </Text>
            <Text style={{ color: themeColors.text, fontWeight: "bold" }}>
              ${delivery_charge}
            </Text>
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 10,
            paddingHorizontal: 20,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Text>
            <Text style={{ fontWeight: "bold" }}>Total Amount: </Text>
            <Text style={{ color: themeColors.text, fontWeight: "bold" }}>
              ${total_charge_after_delivery}
            </Text>
          </Text>
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(0.2), margin: 10, paddingHorizontal:10, paddingVertical:20, borderRadius:15 }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color:themeColors.text }}
          >
            Apply Promo Code to get 5% off !!!
          </Text>
        </View>
      </ScrollView>

      <View
        style={{ backgroundColor: themeColors.bgColor(0.2), paddingVertical:32, paddingHorizontal:10, borderTopLeftRadius:20, borderTopRightRadius:20 }}
        className="p-6 px-8 rounded-t-3xl space-y-4"
      >
        <Link href={"/(screens)/OrderPreparingScreen"} asChild>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default CartSummaryScreen;
