import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "@/constants/Colors";
import AppTextInput from "../../components/appTextInput";
import PasswordTextInput from "../../components/passwordTextInput";
import { showToastForIncorrectCredentials } from "../../components/toast";
import { useAuth } from "@/context/AuthContext";
import "../../firebaseConfig";

const login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("meroaccount@gmail.com");
  const [password, setPassword] = useState("12345678");

  const auth = getAuth();

  const { setIsAuthenticated } = useAuth();

  const handleSignIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setIsAuthenticated(true);
        router.push("/(tabs)");
      })
      .catch((err) => {
        showToastForIncorrectCredentials();
      });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          padding: 20,
          backgroundColor: "white",
          display: "flex",
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
            Login
          </Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <AppTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <PasswordTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: 14,
              color: themeColors.text,
              alignSelf: "flex-end",
            }}
          >
            Forgot your password ?
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => handleSignIn()}
          style={{
            padding: 20,
            marginVertical: 20,
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
            Sign in
          </Text>
        </TouchableOpacity>

        <Link href={"/(auth)/register"} asChild>
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
              Create new account
            </Text>
          </Pressable>
        </Link>
        <Link href={"/(tabs)"} asChild>
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

export default login;
