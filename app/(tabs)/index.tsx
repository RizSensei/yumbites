import { SafeAreaView, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import LoaderComp from "../../components/StartScreenComp/LoaderComp";
import StarterComp from "../../components/StartScreenComp/StarterComp";
import HomeComp from "../../components/StartScreenComp/HomeComp";
import { APP_CONSTANTS } from "../../constants/AppConstants";

export default function HomeScreen() {
  const [component, setComponent] = useState(1);

  const handlePressExplore = () => {
    setComponent(3);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setComponent(2);
    }, APP_CONSTANTS.LOADER_DURATION);

    return () => clearTimeout(timer);
  }, []);

  const renderComponent = () => {
    switch (component) {
      case 1:
        return <LoaderComp />;
      case 2:
        return <StarterComp handlePressExplore={handlePressExplore} />;
      case 3:
        return <HomeComp />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      {/* <StatusBar barStyle="dark-content" /> */}
      {renderComponent()}
    </SafeAreaView>
  );
}