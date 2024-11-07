import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { themeColors } from "../../constants/Colors";

const Circle = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 5,
        left: "50%",
        transform: [{ translateX: -100 }],
        zIndex: -10,
        height: 350,
        width: 350,
        borderRadius: 9999,
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: themeColors.bgColor(0.5),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 275,
          width: 275,
          borderRadius: 9999,
          backgroundColor: themeColors.bgColor(1),
        }}
      ></View>
    </View>
  );
};

const StarterComp = ({ handlePressExplore }) => {
  return (
    <>
      <View
        style={{
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 52,
          backgroundColor: "white",
        }}
      >
        <View style={{ position: "relative" }}>
          <Image
            source={require("../../assets/images/starter-girl-image.png")}
            className="w-64 h-64 "
          />
          <Circle />
        </View>

        <View style={{ width: "100%", paddingHorizontal: 24 }}>
          <View
            style={{
              height: 150,
              borderRadius: 50,
              paddingHorizontal: 10,
              paddingVertical: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                source={require("../../assets/images/YumBites-cropped.png")}
                className="h-24 aspect-video"
              />
            </View>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              marginVertical: 0,
              fontWeight: "bold",
            }}
          >
            Enjoy the best food with us ...
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              marginTop: 10,
              color: "#4B5563",
            }}
          >
            Welcome to YumBites! Enjoy a diverse selection of global cuisines
            made with fresh ingredients. From comforting classics to bold
            flavors, there's something for everyone. Join us for a memorable
            dining experience!
          </Text>

          <Pressable
            onPress={() => {
              handlePressExplore();
            }}
            style={{
              padding: 20,
              marginVertical: 10,
              backgroundColor: themeColors.bgColor(1),
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Explore Dishes
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default StarterComp;
