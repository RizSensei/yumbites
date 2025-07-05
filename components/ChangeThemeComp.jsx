import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "@/constants/Colors";
import { THEME_COLORS } from "@/constants/AppConstants";

const ColorCircle = ({ color, onPress }) => {
  return (
    <Pressable
      style={{
        height: 40,
        width: 40,
        borderRadius: 9999,
        backgroundColor: color,
      }}
      onPress={onPress}
    />
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
    { color: THEME_COLORS.PRIMARY },
    { color: THEME_COLORS.SECONDARY },
    { color: THEME_COLORS.TERTIARY },
  ];

  const handleClose = () => {
    setThemeModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={themeModalVisible}
        onRequestClose={handleClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>
              Choose theme color
            </Text>
            <View style={{ marginVertical: 20 }}>
              <View style={{ flexDirection: "row", gap: 8 }}>
                {colors.map((color, idx) => (
                  <ColorCircle key={idx} color={color.color} />
                ))}
              </View>
            </View>
            <Pressable onPress={handleClose} style={styles.button}>
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ChangeThemeComp;
