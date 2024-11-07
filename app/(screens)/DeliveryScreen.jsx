import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import MapView, { Marker } from "react-native-maps";
import * as Icon from "react-native-feather";
import { themeColors } from "@/constants/Colors";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      {/* <MapView
        initialRegion={{
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView> */}
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              {" "}
              Estimated Arrival{" "}
            </Text>
            <Text className="text-3xl text-gray-700 font-extrabold">
              {" "}
              20-30 minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              {" "}
              Your order is on the way
            </Text>
          </View>
          <Image
            source={require("../../assets/images/Take Away.gif")}
            className="w-20 h-20 rounded-full"
          />
        </View>
      </View>
      <View
        style={{ backgroundColor: themeColors.bgColor(0.8) }}
        className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
      >
        <View
          className="p-1 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
        >
          <Image
            className="h-16 w-16 rounded-full"
            source={require("../../assets/images/profile-picture.jpg")}
          />
        </View>
        <View className="flex-1 ml-3">
          <Text className="text-lg font-bold text-white">Rijan Maharjan</Text>
          <Text className="font-semibold text-white">Your Rider</Text>
        </View>
        <View className="flex-row items-center space-x-3 mr-3">
          <TouchableOpacity className="bg-white p-2 rounded-full">
            <Icon.Phone
              fill={themeColors.bgColor(1)}
              stroke={themeColors.bgColor(1)}
              strokeWidth={1}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} className="bg-white p-2 rounded-full">
            <Icon.X
              fill={'red'}
              stroke={'red'}
              strokeWidth={4}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
