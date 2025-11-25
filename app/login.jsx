// app/login.jsx
import React from "react";
import { StyleSheet, View } from "react-native";
// You don't actually need router yet, so we can remove it for now
// import { router } from "expo-router";

import LoginPage from "../pages/login/LoginPage"; // ✅ fixed import

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
