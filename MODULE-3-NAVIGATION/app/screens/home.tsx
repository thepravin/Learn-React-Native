import { Link } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const home = () => {
  return (
    <View>
      <Text>home component text</Text>
      <Link screen={"details screen top"}>Go to details</Link>
      <Link screen={"about"}>Go to about page</Link>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
