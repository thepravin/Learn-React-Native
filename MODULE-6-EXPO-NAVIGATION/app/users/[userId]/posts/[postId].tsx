import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Post = () => {
  const { userId, postId } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Id : {userId} </Text>
      <Text style={styles.title}>Post Id : {postId} </Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  title: {
    fontWeight: "300",
    fontSize: 40,
  },
});
