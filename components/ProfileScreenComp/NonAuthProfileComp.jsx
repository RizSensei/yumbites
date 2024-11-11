import { themeColors } from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const NonAuthProfileComp = () => {
  return (
    <View className="h-full w-full flex flex-col items-center justify-center">
      <View className="flex-row justify-center items-center gap-10">
        <Link href="/(auth)/login" asChild>
            <Text className="text-xl font-semibold">Login</Text>
        </Link>
        <Text
          className="font-extrabold text-5xl"
          style={{ color: themeColors.bgColor(1) }}
        >
          |
        </Text>
        <Link href="/(auth)/register" asChild>
            <Text className="text-xl font-semibold">Register</Text>
        </Link>
      </View>
    </View>
  );
};

export default NonAuthProfileComp;
