import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { useAuth } from "@/context/AuthContext";
// import { getToken } from "@/lib/getToken";

const more = () => {
  const { isAuthenticated } = useAuth();
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     const verified_token = await getToken();
  //     console.log(verified_token)
  //     if (verified_token) {
  //       setToken(verified_token);
  //     }
  //   };

  //   fetchToken();
  // }, [isAuthenticated]);

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <PageHeader label="More" />
      <View>
        {/* <Text>{token}</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default more;
