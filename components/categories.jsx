import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { categories } from "@/constants/mock/categories-data";


export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
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
        {categories.map((category, index) => {
            // let isActive = index === activeCategory;
            // let BtnClass= isActive ? 'bg-[#FB923C]/90' : 'bg-gray-200';
            // let TextClass= isActive ? 'font-semibold text-white' : 'bg-gray-5200';
            const {name,image} = category;

          return (
            <View key={index} className="flex justify-center items-center mr-5">
              <TouchableOpacity 
              onPress={() => setActiveCategory(index)}
              className={`h-16 w-16 rounded-full flex flex-col items-center justify-center overflow-hidden`}>
              {/* className={`h-16 w-16 rounded-full flex flex-col items-center justify-center overflow-hidden ${BtnClass}`}> */}
                <Image
                  source={{ uri: image }}
                  className="h-full w-full object-cover"
                />
              </TouchableOpacity>
                <Text className={`text-sm`}>{name}</Text>
                {/* <Text className={`text-sm ${TextClass}`}>{name}</Text> */}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
