import { themeColors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import React from "react";
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
  const navigation = useNavigation();
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
                  Anonymous User
                </Text>
                <Text
                  style={{
                    marginVertical: 2,
                    fontWeight: "semibold",
                    color: "gray",
                    fontSize: 10,
                  }}
                >
                  anonmoususer@gmail.cr@gmail.com
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
                  Your Loyalty Points: 0Pts
                </Text>
                <View style={{ paddingVertical: 10 }}>
                  <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.175}
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

            {/* <TouchableOpacity
          //  onPress={() => handleSignOut()}
          >
            <View
              style={{
                marginTop: 10,
                backgroundColor: themeColors.bgColor(0.9),
                paddingHorizontal: 12,
                paddingVertical: 20,
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                }}
              >
                My Profile
              </Text>
              <Icon.Triangle
                height={15}
                width={15}
                strokeWidth={2}
                stroke="white"
                style={{ transform: [{ rotate: "90deg" }] }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          //  onPress={() => handleSignOut()}
          >
            <View
              style={{
                marginTop: 10,
                backgroundColor: themeColors.bgColor(0.75),
                paddingHorizontal: 12,
                paddingVertical: 20,
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                }}
              >
                General Settings
              </Text>
              <Icon.Triangle
                height={15}
                width={15}
                strokeWidth={2}
                stroke="white"
                style={{ transform: [{ rotate: "90deg" }] }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSignOut()}>
            <Text
              style={{
                marginTop: 10,
                backgroundColor: "red",
                color: "white",
                paddingHorizontal: 12,
                paddingVertical: 20,
                borderRadius: 10,
                alignText: "center",
                fontSize: 12,
              }}
            >
              Sign Out
            </Text>
          </TouchableOpacity> */}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AuthProfileComp;
