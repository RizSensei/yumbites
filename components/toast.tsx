import Toast from "react-native-toast-message";

export const showToastForEmptyCart = () => {
    Toast.show({
      type: 'error',
      text1: 'Your cart is empty!',
    });
  }

export const showToastForIncorrectCredentials = () => {
    Toast.show({
      type: 'error',
      text1: 'Incorrect Credentials!',
    });
  }