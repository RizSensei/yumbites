import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ModalLayout from "./ModalLayout";
import AppTextInput from "../appTextInput";
import { themeColors } from "@/constants/Colors";
import { getAuth, updateProfile } from "firebase/auth";

interface UpdateDisplayNameProps {
  themeModalVisible: boolean;
  setThemeModalVisible: (themeModalVisible: boolean) => void;
}

const UpdateDisplayName = ({
  themeModalVisible,
  setThemeModalVisible,
}: UpdateDisplayNameProps) => {
  const styles = StyleSheet.create({
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 15,
      padding: 25,
      alignItems: "center",
      elevation: 5,
    },
  });

  const [displayName, setDisplayName] = useState("");
  const auth = getAuth();

  const updateUserDisplayName = async () => {
    try {
      if (auth.currentUser) {
        // Update the user's displayName
        await updateProfile(auth.currentUser, { displayName: displayName });

        console.log("User registered with display name:", displayName);
      } else {
        console.error("No user is signed in.");
      }
    } catch (error) {
      console.error("Error during updating:", error);
    }
  };

  return (
    <ModalLayout
      modalVisible={themeModalVisible}
      setModalVisible={setThemeModalVisible}
    >
      <View style={styles.modalView}>
        <View style={{ marginVertical: 5, width: "100%" }}>
          <AppTextInput
            placeholder="Display Name"
            value={displayName}
            onChangeText={setDisplayName}
          />
        </View>

        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <TouchableOpacity
            onPress={() => updateUserDisplayName()}
            style={{
              padding: 10,
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
                fontSize: 14,
              }}
            >
              Update
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setThemeModalVisible(false)}
            style={{
              padding: 10,
              backgroundColor: themeColors.bgColor(0.75),
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
                fontSize: 14,
              }}
            >
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalLayout>
  );
};

export default UpdateDisplayName;
