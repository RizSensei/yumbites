import { themeColors } from "@/constants/Colors";
import { dishes } from "@/constants/mock/dishes-data";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View
} from "react-native";
import RestaurantCard from "./restaurantCard";

export default function FeaturedRow() {
  const router = useRouter();

  return (
    <View>
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-lg font-bold">Top Dishes Choice</Text>
          <Text className="text-sm text-gray-500">mouth watering taste</Text>
        </View>
        <Link href="/(screens)/AllDishesScreen" asChild>
          <Pressable>
            <Text
              style={{ color: themeColors.text }}
              className="font-semibold w-max"
            >
              See All
            </Text>
          </Pressable>
        </Link>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible py-5"
      >
        {dishes?.slice(0,6).map((dish, index) => (
          <RestaurantCard key={index} dish={dish} />
        ))}
      </ScrollView>
    </View>
  );
}
