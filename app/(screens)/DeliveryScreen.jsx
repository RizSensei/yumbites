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
import { Link } from "expo-router";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View
        style={{
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          marginTop: -48,
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 40,
          }}
        >
          <View>
            <Text style={{ fontSize: 18, color: "#4B5563", fontWeight: "600" }}>
              Estimated Arrival
            </Text>
            <Text style={{ fontSize: 30, color: "#4B5563", fontWeight: "800" }}>
              20-30 minutes
            </Text>
            <Text style={{ marginTop: 3, color: "#4B5563", fontWeight: "600" }}>
              Your order is on the way
            </Text>
          </View>
          <Image
            source={require("../../assets/images/Take Away.gif")}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
            }}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: themeColors.bgColor(1),
          padding: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 10,
          marginHorizontal: 8,
          marginVertical: 8,
        }}
      >
        <View
          style={{
            padding: 4,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0.4)",
          }}
        >
          <Image
            source={require("../../assets/images/profile-picture.jpg")}
            style={{
              height: 64,
              width: 64,
              borderRadius: 9999,
            }}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Rijan Maharjan
          </Text>
          <Text style={{ fontWeight: "600", color: "white" }}>Your Rider</Text>
        </View>
        <View className="flex-row items-center space-x-3 mr-3">
          <TouchableOpacity className="bg-white p-2 rounded-full">
            <Icon.Phone
              fill={themeColors.bgColor(1)}
              stroke={themeColors.bgColor(1)}
              strokeWidth={1}
            />
          </TouchableOpacity>
          <Link href={"/(tabs)/"} asChild>
            <TouchableOpacity className="bg-white p-2 rounded-full" style={{marginLeft:10}}>
              <Icon.X fill={"red"} stroke={"red"} strokeWidth={4} />
            </TouchableOpacity>
          </Link>
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
