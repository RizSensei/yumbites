import { Tabs } from "expo-router";
import React from "react";
import { useCart } from "../../hooks/useCart";
import * as Icon from "react-native-feather";
import { Text, View } from "react-native";

export default function TabLayout() {
  const { cartItemsLength } = useCart();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Icon.Home
              height="25"
              width="25"
              stroke={focused ? "green" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ focused }) => (
            <Icon.Mail
              height="25"
              width="25"
              stroke={focused ? "green" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <View style={{ position: "relative" }}>
              <Icon.ShoppingCart
                height="25"
                width="25"
                stroke={focused ? "green" : "gray"}
              />
              <View
                style={{
                  position: "absolute",
                  top: -5,
                  right: -5,
                  backgroundColor: "green",
                  borderRadius: 10,
                  width: 16,
                  height: 16,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 10 }}>
                  {cartItemsLength}
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Icon.User
              height="25"
              width="25"
              stroke={focused ? "green" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ focused }) => (
            <Icon.Grid
              height="25"
              width="25"
              stroke={focused ? "green" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
