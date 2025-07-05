import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { categories } from "@/constants/mock/categories-data";
import { Link } from "expo-router";

export default function Categories() {
  return (
    <View className="py-5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map(({ name, image }, idx) => (
          <Link href={`/(screens)/category/${name}`} key={idx} asChild>
            <TouchableOpacity 
              style={{
                flexDirection: 'column', 
                alignItems: 'center', 
                marginRight: 10
              }}
            >
              <View className="h-16 w-16 rounded-full flex flex-col items-center justify-center overflow-hidden">
                <Image
                  source={{ uri: image }}
                  className="h-full w-full object-cover"
                />
              </View>
              <Text className="text-sm">{name}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}
