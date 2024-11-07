import React from "react";
import { Image, Text, View } from "react-native";

const LoaderComp = () => {
  return (
    <View
      style={{
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 52,
        backgroundColor:'white'
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <View>
          <Image
            source={require("../../assets/images/YumBites-cropped.png")}
            className="h-24 aspect-video"
          />
        </View>
        <View
          style={{
            marginVertical: 32,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/images/loader.gif")}
            className="h-8 w-8"
          />
        </View>
      </View>
    </View>
  );
};

export default LoaderComp;
