import { Link } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { createTable } from "../db/createTables";

const index = () => {
  useEffect(() => {
    createTable();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/users-list"}>Users List</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
