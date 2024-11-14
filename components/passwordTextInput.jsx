import AppTextInput from "@/components/appTextInput";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";

const PasswordTextInput = ({ value, onChangeText, placeholder }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const IconComp = ({ IconComponent }) => {
    return (
      <IconComponent strokeWidth={3} stroke="gray" height="16" width="16" />
    );
  };

  return (
    <View style={{ position: "relative" }}>
      <AppTextInput
        placeholder={placeholder ? placeholder : "Password"}
        secureTextEntry={isPasswordVisible}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        onPress={togglePasswordVisibility}
        style={{
          position: "absolute",
          right: 12,
          top: "50%",
          transform: [{ translateY: -8 }],
        }}
      >
        {isPasswordVisible ? (
          <IconComp IconComponent={Icon.EyeOff} />
        ) : (
          <IconComp IconComponent={Icon.Eye} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordTextInput;
