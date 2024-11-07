import { SafeAreaView, StatusBar, Text } from "react-native";
import React, { useEffect, useState } from "react";
import LoaderComp from "../../components/StartScreenComp/LoaderComp";
import StarterComp from "../../components/StartScreenComp/StarterComp";
import HomeComp from "../../components/StartScreenComp/HomeComp";

export default function HomeScreen() {
  const [component, setComponent] = useState(1);

  const handlePressExplore = () => {
    setComponent(3);
  };

  useEffect(() => {
    setTimeout(() => {
      setComponent(2);
    }, 3000);
  }, []);

  const RenderComponent = () => {
    switch (component) {
      case 1:
        return <LoaderComp />;
        break;
      case 2:
        return <StarterComp handlePressExplore={handlePressExplore} />;
        break;
      case 3:
        return <HomeComp />;
        break;
      default:
        return null;
    }
  };
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      {/* <StatusBar barStyle="dark-content" /> */}
      {RenderComponent()}
    </SafeAreaView>
  );
}