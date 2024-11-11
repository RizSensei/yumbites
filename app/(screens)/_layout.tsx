import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="AllDishesScreen" options={{ headerShown: false }} />
      <Stack.Screen name="CartSummaryScreen" options={{ headerShown: false }} />
      <Stack.Screen name="DeliveryScreen" options={{ headerShown: false }} />
      <Stack.Screen name="FavouritesScreen" options={{ headerShown: false }} />
      <Stack.Screen name="NotificationScreen" options={{ headerShown: false }} />
      <Stack.Screen name="OrderPreparingScreen" options={{ headerShown: false }} />
      <Stack.Screen name="OrderScreen" options={{ headerShown: false }} />
      <Stack.Screen name="OtpValidationScreen" options={{ headerShown: false }} />
      <Stack.Screen name="dishes/[_id]" options={{ headerShown: false }} />
      <Stack.Screen name="category/[category_name]" options={{ headerShown: false }} />
      <Stack.Screen name="MapViewScreen" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
