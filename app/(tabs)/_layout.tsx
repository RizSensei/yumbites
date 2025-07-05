import { Tabs } from "expo-router";
import React from "react";
import { useCart } from "../../hooks/useCart";
import * as Icon from "react-native-feather";
import { Text, View } from "react-native";
import { TAB_COLORS, APP_CONSTANTS } from "../../constants/AppConstants";

const CartBadge = ({ count }: { count: number }) => (
  <View style={{ position: "relative" }}>
    <Icon.ShoppingCart
      height="25"
      width="25"
      stroke={TAB_COLORS.ACTIVE}
    />
    {count > 0 && (
      <View
        style={{
          position: "absolute",
          top: -APP_CONSTANTS.CART_BADGE_OFFSET,
          right: -APP_CONSTANTS.CART_BADGE_OFFSET,
          backgroundColor: TAB_COLORS.ACTIVE,
          borderRadius: 10,
          width: APP_CONSTANTS.CART_BADGE_SIZE,
          height: APP_CONSTANTS.CART_BADGE_SIZE,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 10 }}>
          {count}
        </Text>
      </View>
    )}
  </View>
);

export default function TabLayout() {
  const { cartItemsLength } = useCart();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: TAB_COLORS.ACTIVE,
        tabBarInactiveTintColor: TAB_COLORS.INACTIVE,
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
              stroke={focused ? TAB_COLORS.ACTIVE : TAB_COLORS.INACTIVE}
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
              stroke={focused ? TAB_COLORS.ACTIVE : TAB_COLORS.INACTIVE}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <CartBadge count={cartItemsLength} />
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
              stroke={focused ? TAB_COLORS.ACTIVE : TAB_COLORS.INACTIVE}
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
              stroke={focused ? TAB_COLORS.ACTIVE : TAB_COLORS.INACTIVE}
            />
          ),
        }}
      />
    </Tabs>
  );
}
