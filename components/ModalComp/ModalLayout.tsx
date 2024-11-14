import { View, Text, StyleSheet, SafeAreaView, Modal } from "react-native";
import React, { ReactNode } from "react";

interface ModalLayoutProps {
  children: ReactNode;
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

const ModalLayout = ({
  children,
  modalVisible,
  setModalVisible,
}: ModalLayoutProps) => {
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>{children}</View>
      </Modal>
    </SafeAreaView>
  );
};

export default ModalLayout;
