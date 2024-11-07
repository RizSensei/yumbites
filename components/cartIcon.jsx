import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useCart } from "@/hooks/useCart";
import { themeColors } from "@/constants/Colors";
import { Link, useRouter } from "expo-router";

export default function CartIcon() {
  const {cartItems, cartTotal, cartItemsLength} = useCart();
  const router = useRouter();
  return (
    <>
      {cartItems.length > 0 && (
        <View className="absolute bottom-5 w-full z-50">
          <Link href={"/(tabs)/cart"} asChild>
            <TouchableOpacity
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
            >
              <View
                className="p-2 px-4 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
              >
                <Text className=" font-extrabold text-white text-lg"> {cartItemsLength ?? 0} </Text>
              </View>
              <Text className="flex-1 text-center font-extrabold text-white text-lg">
                {" "}
                View Cart{" "}
              </Text>
              <Text className=" font-extrabold text-white text-lg"> ${cartTotal ?? 0} </Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}
    </>
  );
}
