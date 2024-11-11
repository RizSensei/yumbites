import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { themeColors } from "@/constants/Colors";
import AppTextInput from "@/components/appTextInput";
import { Link, router, useNavigation, useRouter } from "expo-router";
import "../../firebaseConfig";

const register = () => {
  const authentication = getAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Passwords do not match",
      });
      return;
    }

    createUserWithEmailAndPassword(authentication, email, password)
      .then((res) => {
      
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        
        Toast.show({
          type: "success",
          text1: "Registration Successful",
        });
        
        router.push("/(auth)/login");
      })
      .catch((error) => {
        console.error(error);
        Toast.show({
          type: "error",
          text1: error.message,
        });
      });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          padding: 20,
          backgroundColor: "white",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ height: 50 }}
            resizeMode="contain"
            source={require("../../assets/images/YumBites-cropped.png")}
          />
          <Text
            style={{
              fontSize: 28,
              color: themeColors.text,
              marginVertical: 0,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <AppTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <AppTextInput
            placeholder="Password"
            secureTextEntry={hidePass}
            value={password}
            onChangeText={setPassword}
          />
          <AppTextInput
            placeholder="Confirm Password"
            secureTextEntry={hidePass}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <Link href="/(screens)/OtpValidationScreen" asChild>
          <Pressable
            style={{
              padding: 20,
              marginVertical: 10,
              backgroundColor: themeColors.text,
              borderRadius: 10,
              shadowColor: themeColors.text,
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.3,
              shadowRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Sign up
            </Text>
          </Pressable>
        </Link>
        <Link href="/(auth)/login" asChild>
          <Pressable
            style={{
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "#000",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Already have an account
            </Text>
          </Pressable>
        </Link>
        <Link href="/(tabs)" asChild>
          <Pressable
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: themeColors.text,
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Back - Home
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default register;
