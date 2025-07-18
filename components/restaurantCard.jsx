import { themeColors } from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import * as Icon from "react-native-feather";
import { APP_CONSTANTS } from "@/constants/AppConstants";

export default function RestaurantCard({ dish }) {
  const { _id, image, name, rating, category } = dish;
  
  return (
    <Link href={`/(screens)/dishes/${_id}`} asChild>
      <TouchableWithoutFeedback>
        <View
          className="mr-6 bg-white rounded-3xl overflow-hidden"
          style={{
            shadowColor: themeColors.bgColor(0.2),
            shadowRadius: 7,
          }}
        >
          <View className="h-36 w-64">
            <Image
              className="h-full w-full object-scale-down"
              source={{ uri: image }}
            />
          </View>
          <View className="px-3 pb-4 space-y-2">
            <Text className="text-xl font-bold pt-2">{name}</Text>
            <View className="flex-row items-center space-x-1">
              <Icon.Star
                height="12"
                width="12"
                stroke={themeColors.bgColor(1)}
                strokeWidth={2.5}
              />
              <Text className="text-xs">
                <Text className="text-green-700">
                  {rating ?? APP_CONSTANTS.DEFAULT_RATING}
                </Text>
                <Text className="text-gray-700">
                  {" "}({APP_CONSTANTS.DEFAULT_REVIEWS}) .{" "}
                  <Text className="font-semibold">{category}</Text>
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Link>
  );
}
