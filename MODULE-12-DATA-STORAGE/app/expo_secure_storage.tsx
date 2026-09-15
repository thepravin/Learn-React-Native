import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

const index = () => {
  const [useName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSave = async () => {
    const canUseBiometrics = SecureStore.canUseBiometricAuthentication();

    try {
      await SecureStore.setItemAsync("username", useName, {
        requireAuthentication: true,
        authenticationPrompt: "Authenticate to access your secret",
      });
      await SecureStore.setItemAsync("password", password);

      Alert.alert("Success", "Credentails saved securely...");
      setUserName("");
      setPassword("");
    } catch (error) {
      Alert.alert("Error", "Failed to save data");
    }
  };

  const onLoad = async () => {
    try {
      const savedUserName = await SecureStore.getItemAsync("username");
      const savedPassword = await SecureStore.getItemAsync("password");

      Alert.alert(
        "Success",
        `Username : ${savedUserName}\n Password: ${savedPassword}`,
      );
    } catch (error) {
      Alert.alert("Error", "Failed to load saved data");
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <TextInput
        placeholder="Username"
        value={useName}
        onChangeText={setUserName}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <Button title="Submit" onPress={onSave} />
      <View style={{ marginTop: 15 }}>
        <Button title="Load secure store" onPress={onLoad} />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
