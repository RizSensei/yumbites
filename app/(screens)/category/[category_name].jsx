import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { dishes } from "@/constants/mock/dishes-data";
import { themeColors } from "@/constants/Colors";
import * as Icon from "react-native-feather";
import PageHeader from "../../../components/PageHeader";
import { Image } from "expo-image";

const CategoryDishesScreen = () => {
  const [search, setSearch] = useState("");

  const { category_name } = useLocalSearchParams();
  const [item, setItem] = useState(null);
  const [filteredDishes, setFilteredDishes] = useState(null);
  console.log(filteredDishes);

  useEffect(() => {
    if (dishes && category_name) {
      const item = dishes.filter((dish) =>
        dish.category.toLowerCase().includes(category_name.toLowerCase())
      );
      setFilteredDishes(item);
    }
  }, [dishes, category_name]);

  const handleSearch = (value) => {
    setSearch(value);

    if (!value) {
      setFilteredDishes(item);
    } else {
      const searchDishes = item.filter((dish) =>
        dish.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredDishes(searchDishes);
    }
  };

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
        {filteredDishes?.length > 0 ? (
          filteredDishes?.map((dish, idx) => {
            const id = dish?._id;
            return (
              <Link key={idx} href={`/(screens)/dishes/${id}`} asChild>
                <View
                  style={{
                    backgroundColor:'white',
                    paddingVertical:5,
                    paddingHorizontal:5,
                    borderRadius: 10,
                    shadowColor: themeColors.bgColor(0.2),
                    shadowRadius: 7,
                    marginVertical: 5,
                    flexDirection: "row",
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
                      source={{ uri: dish.image }}
                    />
                  </View>

                  <View style={{ marginLeft: 10, flexDirection: "column" }}>
                    <Text className="text-xl font-bold">{dish.name}</Text>
                    <Text
                      numberOfLines={1}
                      className="text-xs font-medium mt-1"
                      style={{ color: "gray" }}
                    >
                      {dish.description}
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
                          {dish.rating ?? "4.75"}{" "}
                        </Text>
                        <Text className="text-gray-700">
                          &#40; 4.4K reviews&#41; .
                          <Text className="font-semibold">{dish.category}</Text>
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </Link>
            );
          })
        ) : (
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 20,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "gray", fontWeight: "bold" }}>
              No Dish Found
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryDishesScreen;
