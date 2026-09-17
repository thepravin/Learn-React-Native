import * as Network from "expo-network";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// @react-native-community/netinfo

const NetworkListener = () => {
  const [status, setStatus] = useState<any>("checking...");
  const [connectionType, setConnectionType] = useState<any>("");

  useEffect(() => {
    const subscription = Network.addNetworkStateListener((state) => {
      console.log("Network changed : ", state);
      const online = state.isConnected && state.isInternetReachable;

      if (online) {
        setStatus("🟢 Online");
        setConnectionType(state.type);
      } else {
        setStatus("🛑 Offline");
        setConnectionType(state.type);
      }
    });

    checkInitialState();

    return () => subscription.remove();
  }, []);

  const checkInitialState = async () => {
    const state = await Network.getNetworkStateAsync();
    setStatus(state.isConnected ? "🟢 Online" : "🛑 Offline");
    setConnectionType(state.type);
  };

  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.type}>{connectionType}</Text>
      </View>

      <Text style={styles.hint}>Try turning on/off WiFi or Airplane Mode</Text>
    </View>
  );
};

export default NetworkListener;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  badge: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  status: {
    fontSize: 32,
    marginBottom: 10,
  },
  type: {
    fontSize: 20,
    color: "#333",
  },
  hint: {
    marginTop: 30,
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});
