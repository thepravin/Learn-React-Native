import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const home = () => {
  const navigation = useNavigation<any>();

  return (
    // <View>
    //   <Text>home component text</Text>
    //   <Link screen={"details screen top"}>Go to details</Link>
    //   <Link screen={"about"}>Go to about page</Link>
    // </View>

    <Pressable onPress={() => navigation.navigate("details screen top")}>
      <Text>Go to details with useNavigation</Text>
    </Pressable>
  );
};

export default home;

const styles = StyleSheet.create({});
