import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "@/constants/Colors";
import { Link, useRouter } from "expo-router";

const PageRedirectBtn = ({ redirectTo, IconComponent, label }) => {
  const router = useRouter();

  return (
    <Link href={redirectTo} asChild>
      <Pressable
        style={{
          marginTop: 10,
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: "white",
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "gray",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconComponent height={20} width={20} strokeWidth={2} stroke="gray" />
          <Text style={{ marginLeft: 10, color: "gray", fontWeight: "bold" }}>
            {label}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};

const MyAccountComp = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={{ fontWeight: "bold", fontSize: 15, color: "gray" }}>
        My Account
      </Text>
      <View style={{ borderRadius: 10, overflow: "hidden" }}>
        <PageRedirectBtn
          redirectTo="/(screens)/OrderScreen"
          IconComponent={Icon.FileText}
          label="My Orders"
        />
        <PageRedirectBtn
          redirectTo="/(screens)/FavouritesScreen"
          IconComponent={Icon.Heart}
          label="Favourites"
        />
        <PageRedirectBtn
          redirectTo="/(screens)/MapViewScreen"
          IconComponent={Icon.Map}
          label="My Address"
        />
        <PageRedirectBtn
          redirectTo="/(screens)/OrderScreen"
          IconComponent={Icon.Key}
          label="Change Password"
        />
        <TouchableOpacity
          // onPress={() => handleSignOut()}
          style={{
            marginTop: 10,
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: themeColors.bgColor(1),
            borderRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon.LogOut
              height={20}
              width={20}
              strokeWidth={2}
              stroke="white"
            />
            <Text
              style={{ marginLeft: 10, color: "white", fontWeight: "bold" }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAccountComp;
