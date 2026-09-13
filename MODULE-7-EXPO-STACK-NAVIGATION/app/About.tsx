import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const About = () => {
  return (
    <View style={{ flex: 1 }}>
      {Platform.OS === "android" && (
        <View style={{ backgroundColor: "#e16161", padding: 16 }}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>
            About
          </Text>
        </View>
      )}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>About Content</Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
