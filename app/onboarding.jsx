// app/intro.jsx
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

const slides = [
  {
    key: "slide1",
    title: "Welcome to TabFood",
    text: "The new connection between you and your hobbies. Discover places that match your vibe and your taste.",
    image: require("../assets/images/onboarding1.jpg"),
  },
  {
    key: "slide2",
    title: "Be Your Friends' Food Blogger",
    text: "TabFood is a social media for restaurants, cafés, and foods. Share your food experiences and reviews with your circle.",
    image: require("../assets/images/onboarding2.jpg"),
  },
  {
    key: "slide3",
    title: "We’re Waiting For You",
    text: "Join us now and start your food journey. Save spots, post moments, and never eat boring again.",
    image: require("../assets/images/onboarding3.jpg"),
  },
];

export default function Intro() {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(xOffset / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      const nextIndex = currentIndex + 1;
      const offset = nextIndex * width;
      scrollViewRef.current?.scrollTo({ x: offset, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      router.push("/signup"); // or "/login" if you prefer
    }
  };

  const handleSkip = () => {
    router.push("/login");
  };

  const isLast = currentIndex === slides.length - 1;

  return (
    <View style={styles.container}>
      {/* Skip button (top-right) */}
      {!isLast && (
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide) => (
          <View key={slide.key} style={[styles.slide, { width }]}>
            <Image
              source={slide.image}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.text}>{slide.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Dot indicators */}
      <View style={styles.dotsContainer}>
        {slides.map((_, idx) => (
          <View
            key={idx}
            style={[styles.dot, currentIndex === idx && styles.activeDot]}
          />
        ))}
      </View>

      {/* Bottom button */}
      <View className="bottomContainer" style={styles.bottomContainer}>
        <TouchableOpacity style={styles.mainButton} onPress={handleNext}>
          <Text style={styles.mainButtonText}>
            {isLast ? "Join TabFood Now" : "Next"}
          </Text>
        </TouchableOpacity>

        {isLast && (
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.loginText}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },
  skipButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
  },
  skipText: {
    color: "#8B0000",
    fontWeight: "600",
    fontSize: 14,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  image: {
    width: "80%",
    height: 220,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#8B0000",
    textAlign: "center",
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: "#7a3b3b",
    textAlign: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0B3B3",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#8B0000",
    width: 10,
    height: 10,
  },
  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 28,
    gap: 8,
  },
  mainButton: {
    backgroundColor: "#8B0000",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  mainButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  loginText: {
    textAlign: "center",
    color: "#7a3b3b",
    fontSize: 13,
    marginTop: 6,
  },
});
