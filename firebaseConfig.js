// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9zBlFWSmmzivNJbJZDDB3YhnBs4pofYA",
  authDomain: "yumride-72179.firebaseapp.com",
  projectId: "yumride-72179",
  storageBucket: "yumride-72179.appspot.com",
  messagingSenderId: "176569346653",
  appId: "1:176569346653:web:739775e11adff468fb3bb4",
  measurementId: "G-6KRLQ3X5EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Conditionally initialize Analytics if supported
const initializeAnalytics = async () => {
  const supported = await isSupported();
  if (supported) {
    const analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized");
  } else {
    console.warn("Firebase Analytics is not supported in this environment.");
  }
};
initializeAnalytics();

// Initialize Auth with AsyncStorage for persistence in React Native
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };
