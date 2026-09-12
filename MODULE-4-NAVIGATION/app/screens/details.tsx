import { Link } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const details = () => {
  return (
    <View>
      <Text>details component text</Text>
      <Link screen={"about"}>Go to about page</Link>
    </View>
  );
};

export default details;

const styles = StyleSheet.create({});
