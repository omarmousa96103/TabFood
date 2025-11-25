import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login pressed:", { username, password });
  };

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>TabFood</Text>
      <Text style={styles.subtitle}>Built for what you love to taste.</Text>

      {/* Logo (fix path!) */}
      <Image
        source={require("../../assets/images/TabFoodLogo.png")}
        style={styles.logo}
      />

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#8B0000"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#8B0000"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Login button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Signup link */}
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.signupText}>New to TabFood? </Text>

        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}> Now!</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050718",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#B22222",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 32,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 32,
  },
  input: {
    width: "100%",
    backgroundColor: "#D3D3D3",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 14,
    color: "#8B0000",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#8B0000",
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 4,
    marginBottom: 18,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  signupText: {
    fontSize: 13,
    color: "#FFFFFF",
  },
  signupLink: {
    fontSize: 13,
    color: "#FF4B4B",
    fontWeight: "700",
  },
});
