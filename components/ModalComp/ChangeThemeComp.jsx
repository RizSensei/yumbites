import { themeColors } from "@/constants/Colors";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ModalLayout from "./ModalLayout";
import * as Icon from "react-native-feather";

const ColorCircle = ({ color }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);
  return (
    <Pressable
      style={{
        height: 40,
        width: 40,
        borderRadius: 9999,
        backgroundColor: color,
      }}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      {isPressed && (
        <View
          style={{
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon.Check strokeWidth={3} stroke="white" height="20" width="20" />
        </View>
      )}
    </Pressable>
  );
};

const ChangeThemeComp = ({ themeModalVisible, setThemeModalVisible }) => {
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 15,
      padding: 25,
      alignItems: "center",
      elevation: 5,
    },
    button: {
      width: 60,
      backgroundColor: themeColors.bgColor(1),
      padding: 10,
      borderRadius: 20,
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      textAlign: "center",
    },
  });

  const colors = [
    {
      color: "#15803D",
    },
    {
      color: "#EF4444",
    },
    {
      color: "#6366F1",
    },
  ];

  return (
    <ModalLayout
      modalVisible={themeModalVisible}
      setModalVisible={setThemeModalVisible}
    >
      <View style={styles.modalView}>
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          Choose theme color
        </Text>
        <View style={{ marginVertical: 20 }}>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {colors.map((color, idx) => {
              return <ColorCircle key={idx} color={color.color} />;
            })}
          </View>
        </View>
        <Pressable
          onPress={() => setThemeModalVisible(!themeModalVisible)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Close</Text>
        </Pressable>
      </View>
    </ModalLayout>
  );
};

export default ChangeThemeComp;
