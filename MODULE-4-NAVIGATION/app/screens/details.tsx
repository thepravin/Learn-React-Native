import { Link, useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const details = ({ route }) => {
  const navigation = useNavigation<any>();

  const { itemId, otherParam } = route.params;

  return (
    <View>
      <Text>details component text</Text>
      <Text>{otherParam}</Text>
      <Text>ItemId : {itemId}</Text>

      <Pressable
        onPress={() =>
          navigation.push("details screen top", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      >
        <Text>Go to Details again</Text>
      </Pressable>

      <Link screen={"about"}>Go to about page</Link>
    </View>
  );
};

export default details;

const styles = StyleSheet.create({});
