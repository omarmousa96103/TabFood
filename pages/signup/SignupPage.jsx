import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import SignupForm from '../../components/SignupForm/SignupForm';

export default function SignupPage() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>TabFood</Text>
      <Text style={styles.subtitle}>Built With Taste.</Text>
      <Text style={styles.subtitle}>For Food Addicts</Text>

      <Image
        source={require('../../assets/images/TabFoodLogo.png')}
        style={styles.logo}
      />

      {/* Signup fields */}
      <SignupForm />

      {/* Login redirect */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={styles.signupText}>Already have an account? </Text>

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.loginLink}>Login Now!</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050718',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#B22222',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  signupText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  loginLink: {
    color: '#FF4B4B',
    fontWeight: "700",
    fontSize: 13,
  }
});
