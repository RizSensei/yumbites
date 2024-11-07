import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";

const PageHeader = ({ label, backOption = false }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        elevation: 2,
      }}
    >
      {backOption && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginRight: 32 }}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="gray" />
        </TouchableOpacity>
      )}
      <View>
        <Text style={{ fontWeight: 600, fontSize: 20 }}>{label}</Text>
      </View>
    </View>
  );
};

export default PageHeader;
