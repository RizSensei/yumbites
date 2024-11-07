import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "@/constants/Colors";

const OtpValidationScreen = () => {
  const numberOfDigits = 4;
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [focused, setFocused] = useState(false);
  const [otpError, setOtpError] = useState(null);
  const otpBoxReference = useRef([]);

  const navigation = useNavigation();
  let correctOTP = "1234";

  const handleChange = (value, index) => {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }

    if (!value && index !== 0) {
      otpBoxReference.current[index - 1].focus();
    }
  };

  const handleBackspaceAndEnter = (e, index) => {
    if (e.key === "Spacebar" && e.target.value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  useEffect(() => {
    let joined_otp = otp.join("");
    if (joined_otp && joined_otp.length === 4) {
      if (joined_otp !== correctOTP) {
        setOtpError("❌ Wrong OTP Please Check Again");
      }
    }
  }, [otp]);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-2 left-4 bg-gray-50 p-2 rounded-full shadow z-[100]"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">
            OTP Code Validation
          </Text>
        </View>
      </View>
      <View
        style={{
          height: "100%",
          paddingHorizontal: 20,
          backgroundColor: "white",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 14,
              color: themeColors.text,
              marginVertical: 0,
              fontWeight: "bold",
              marginVertical: 12,
            }}
          >
            Your OTP Code has been sent to 986******0
          </Text>

          <View style={{ marginVertical: 5, flexDirection: "row" }}>
            {otp.map((value, idx) => {
              return (
                <TextInput
                  key={idx}
                  value={value}
                  onFocus={() => setFocused(true)}
                  onChange={(e) => {
                    handleChange(e.nativeEvent.text, idx);
                  }}
                  onKeyUp={(e) => handleBackspaceAndEnter(e, idx)}
                  ref={(reference) =>
                    (otpBoxReference.current[idx] = reference)
                  }
                  maxLength={1}
                  style={[
                    {
                      fontSize: 32,
                      borderColor: "gray",
                      borderWidth: 2,
                      paddingVertical: 12,
                      paddingHorizontal: 20,
                      borderRadius: 10,
                      marginRight: 10,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    focused && {
                      borderColor: themeColors.text,
                      borderWidth: 2,
                      shadowOffset: { width: 4, height: 10 },
                      shadowColor: themeColors.text,
                      shadowOpacity: 0.2,
                      shadowRadius: 10,
                    },
                  ]}
                />
              );
            })}
          </View>

          <Text
            style={{
              fontSize: 12,
              color: "gray",
              marginVertical: 0,
              fontWeight: "bold",
              marginVertical: 5,
            }}
          >
            Didn't get a code?{" "}
            <Text style={{ color: themeColors.text }}>Resend</Text>
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: "red",
              textAlign: "center",
              marginVertical: 5,
            }}
          >
            {otpError ? otpError : null}
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("OtpValidation")}
            style={{
              padding: 20,
              marginVertical: 10,
              backgroundColor: themeColors.text,
              borderRadius: 10,
              shadowColor: themeColors.text,
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.3,
              shadowRadius: 10,
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Verify
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpValidationScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
