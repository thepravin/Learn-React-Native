import { insertUser } from "@/db/crud";
import { router } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const InsertUser = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <View>
      <TextInput placeholder="Name" onChangeText={setName} />
      <TextInput placeholder="Email" onChangeText={setEmail} />

      <Button
        title="Save"
        onPress={async () => {
          await insertUser(name, email);
          router.push("/users-list");
        }}
      />
    </View>
  );
};

export default InsertUser;

const styles = StyleSheet.create({});
