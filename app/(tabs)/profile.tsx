import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/AuthContext';
import AuthProfileComp from "../../components/ProfileScreenComp/AuthProfileComp";
import NonAuthProfileComp from "../../components/ProfileScreenComp/NonAuthProfileComp";

const profile = () => {
  const { isAuthenticated } = useAuth();

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {!isAuthenticated ? <NonAuthProfileComp /> : <AuthProfileComp />}
    </SafeAreaView>
  )
}

export default profile