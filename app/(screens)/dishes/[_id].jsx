import CartIcon from "@/components/cartIcon";
import { themeColors } from "@/constants/Colors";
import { dishes } from "@/constants/mock/dishes-data";
import { useCart } from "@/hooks/useCart";
import { addToCart } from "@/redux/slices/cartSlice";
import { Image } from "expo-image";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Icon from "react-native-feather";
import { useDispatch } from "react-redux";

export default function RestaurantScreen() {
  const { _id } = useLocalSearchParams();
  console.log(".......................",_id)
  const dispatch = useDispatch();
  const { cartItems } = useCart();
  const navigation = useNavigation();
  const [item, setItem] = useState(null);

  const handleAddToCart = () => {
    if (item) {
      dispatch(addToCart({ ...item }));
    }
  };

  useEffect(() => {
    const selectedItem = dishes.find((dish) => dish?._id == _id);
    console.log(selectedItem);
    setItem(selectedItem);
  }, [_id]);

  const itemExist = useMemo(() => {
    return cartItems.some((dish) => dish?.name === item?.name);
  }, [cartItems, item?.name]);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <CartIcon />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image
          style={{ height: 300 }}
          // source="https://i.pinimg.com/564x/fb/72/9a/fb729a2cda70abf872480db60eead4d8.jpg"
          source={{ uri: item?.image }}
          contentFit="cover"
          transition={500}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "white",
            marginTop: -48,
            paddingTop: 24,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            flex: 1,
          }}
        >
          <View className="px-5">
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {" "}
              {item?.name}{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 5,
                gap: 8,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                <Icon.Star
                  height="12"
                  width="12"
                  stroke={themeColors.bgColor(1)}
                  strokeWidth={2.5}
                />
                <Text className="text-sm">
                  <Text className="text-green-700"> {item?.rating ?? 4} </Text>
                  <Text className="text-gray-700">&#40; 4.4K reviews&#41;</Text>
                </Text>
              </View>
              <Text className="text-gray-700 text-lg font-bold">
                ${item?.price}
              </Text>
              <View className="flex-row items-center">
                {itemExist ? (
                  <TouchableOpacity
                    className="p-1 rounded-full"
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                  >
                    <Text
                      style={{
                        color: "white",
                        paddingVertical: 2,
                        paddingHorizontal: 5,
                      }}
                    >
                      Added
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={handleAddToCart}
                    className="p-1 rounded-full"
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                  >
                    <Text
                      style={{
                        color: "white",
                        paddingVertical: 2,
                        paddingHorizontal: 5,
                      }}
                    >
                      Add to Cart
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <Text className="text-gray-500 mt-2"> {item?.description} </Text>

            {itemExist && (
              <View
                style={{
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <View
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    backgroundColor: themeColors.bgColor(0.5),
                  }}
                >
                  <Text style={{ color: "white" }}>
                    You have already added the dish in the cart.
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
