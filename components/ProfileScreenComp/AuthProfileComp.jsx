import { themeColors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import {
  Image,
  ProgressBarAndroid,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import PageHeader from "../PageHeader";
import MyAccountComp from "./MyAccountComp";

const AuthProfileComp = () => {

  const user = useMemo(() => ({
    name: "Anonymous User",
    email: "anonymoususer@gmail.com",
    loyaltyPoints: 0,
    loyaltyProgress: 0.175,
  }), []);

  return (
    <>
      <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
        <View style={{ backgroundColor: "white", height: "100%" }}>
          <PageHeader label="My Profile" backOption={true} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              paddingVertical: 20,
              paddingHorizontal: 20,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 9999,
                  overflow: "hidden",
                  borderWidth: 2,
                  borderColor: "#d3d3d3",
                }}
              >
                <Image
                  source={require("../../assets/images/YumBites-cropped.png")}
                  style={{
                    height: "100%",
                    width: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View
                style={{
                  marginVertical: 5,
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {user.name}
                </Text>
                <Text
                  style={{
                    marginVertical: 2,
                    fontWeight: "semibold",
                    color: "gray",
                    fontSize: 10,
                  }}
                >
                  {user.email}
                </Text>
              </View>
            </View>

            {/* loyalty program  */}
            <View
              style={{
                width: "100%",
                borderRadius: 10,
                backgroundColor: themeColors.bgColor(1),
                paddingVertical: 16,
                paddingHorizontal: 24,
              }}
            >
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBlockColor: "white",
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Your Loyalty Points: {user.loyaltyPoints}Pts
                </Text>
                <View style={{ paddingVertical: 10 }}>
                  <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={user.loyaltyProgress}
                    color="white"
                  />
                </View>
              </View>
              <View style={{ paddingTop: 10 }}>
                <Text style={{ color: "white" }}>
                  Order more from YumBites & earn rewards
                </Text>
              </View>
            </View>
            {/* loyalty program  */}

            <MyAccountComp />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AuthProfileComp;
