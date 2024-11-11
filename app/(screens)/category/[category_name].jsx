import { themeColors } from "@/constants/Colors";
import { dishes } from "@/constants/mock/dishes-data";
import { Image } from "expo-image";
import { Link, useLocalSearchParams } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View
} from "react-native";
import * as Icon from "react-native-feather";
import { useDebounce } from "use-debounce";
import PageHeader from "../../../components/PageHeader";

const CategoryDishesScreen = () => {
  const { category_name } = useLocalSearchParams();
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);

  const filteredByCategory = useMemo(() => {
    if (!dishes || !category_name) return [];
    return dishes.filter((dish) =>
      dish.category.toLowerCase().includes(category_name.toLowerCase())
    );
  }, [dishes, category_name]);

  const filteredDishes = useMemo(() => {
    if (!debouncedSearch) return filteredByCategory;
    return filteredByCategory.filter((dish) =>
      dish.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch, filteredByCategory]);

  const handleSearch = (value) => setSearch(value);

  if ((filteredDishes.length === 0))
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "gray", fontWeight: "bold" }}>No Dish Found</Text>
      </View>
    );

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <PageHeader label="Dishes" backOption={true} />

      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: 10,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            width: "100%",
            borderRadius: 25,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#6b7280",
          }}
        >
          <View className="w-full flex-row items-center">
            <Icon.Search height="25" width="25" stroke="gray" />
            <TextInput
              placeholder="Search Foods"
              className="ml-2"
              style={{ flexGrow: 1 }}
              value={search}
              onChangeText={handleSearch}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 12,
              backgroundColor: themeColors.bgColor(1),
              paddingHorizontal: 12,
              paddingVertical: 5,
              borderRadius: 9999,
              alignSelf: "flex-start",
            }}
          >
            {category_name}
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 10, paddingHorizontal: 20, paddingBottom: 10 }}
      >
        {filteredDishes?.map((dish, idx) => {
          const {_id, image, name, description, rating, category } = dish;
          return (
            <Link key={idx} href={`/(screens)/dishes/${_id}`}>
              <View
                style={{
                  backgroundColor: "white",
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  borderRadius: 10,
                  shadowColor: themeColors.bgColor(0.2),
                  shadowRadius: 7,
                  marginVertical: 5,
                  flexDirection: "row"
                }}
              >
                <View
                  style={{
                    height: 60,
                    aspectRatio: 1 / 1,
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "scale-down",
                    }}
                    source={{ uri: image }}
                  />
                </View>

                <View style={{ marginLeft: 10, flexDirection: "column" }}>
                  <Text className="text-xl font-bold">{name}</Text>
                  <Text
                    numberOfLines={1}
                    className="text-xs font-medium mt-1"
                    style={{ color: "gray" }}
                  >
                    {description}
                  </Text>
                  <View
                    style={{ marginTop: 4 }}
                    className="flex-row items-center space-x-1"
                  >
                    <Icon.Star
                      height="12"
                      width="12"
                      stroke={themeColors.bgColor(1)}
                      strokeWidth={2.5}
                    />
                    <Text className="text-xs">
                      <Text className="text-green-700">
                        {" "}
                        {rating ?? "4.75"}{" "}
                      </Text>
                      <Text className="text-gray-700">
                        &#40; 4.4K reviews&#41; .
                        <Text className="font-semibold">{category}</Text>
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </Link>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryDishesScreen;
