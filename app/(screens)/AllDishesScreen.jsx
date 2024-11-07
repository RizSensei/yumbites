import { themeColors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Icon from "react-native-feather";
import PageHeader from "../../components/PageHeader";
import { dishes } from "@/constants/mock/dishes-data";

const AllDishesScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [filteredDishes, setFilteredDishes] = useState(dishes);

  const handleSearch = (value) => {
    setSearch(value);

    if (!value) {
      setFilteredDishes(dishes);
    } else {
      const searchDishes = dishes.filter((dish) =>
        dish.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredDishes(searchDishes);
    }
  };

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <PageHeader label="All Dishes" backOption={true} />

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
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 10, paddingHorizontal: 20, paddingBottom: 10 }}
      >
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish, idx) => {
            return (
              <TouchableWithoutFeedback
                key={idx}
                onPress={() => navigation.navigate("Restaurant", { ...dish })}
              >
                <View
                  style={{
                    shadowColor: themeColors.bgColor(0.2),
                    shadowRadius: 7,
                    marginVertical: 5,
                    flexDirection: "row",
                  }}
                >
                  <View
                    className="h-24"
                    style={{
                      aspectRatio: 1 / 1,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      className="h-full w-full object-scale-down"
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
              </TouchableWithoutFeedback>
            );
          })
        ) : (
          <View style={{paddingHorizontal:20, paddingVertical:20, flexDirection:'row', justifyContent:'center'}}>
            <Text style={{color:'gray', fontWeight:'bold'}}>No Dish Found</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllDishesScreen;
