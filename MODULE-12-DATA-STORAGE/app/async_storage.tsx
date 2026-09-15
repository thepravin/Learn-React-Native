import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [output, setOutput] = useState("");

  const log = (msg: string | null) => setOutput((prev) => prev + "\n" + msg);
  const clear = () => setOutput("");

  const ex1 = async () => {
    clear();
    await AsyncStorage.setItem("ex1", "This is example 1");
    log("Saved: ex1 : This is example 1");
  };

  const ex2 = async () => {
    clear();
    const value: string | null = await AsyncStorage.getItem("ex1");
    log(value);
  };

  const ex3 = async () => {
    clear();

    await AsyncStorage.removeItem("ex1");
    log("data removed");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={ex1}>
        <Text>Save item</Text>
      </Pressable>
      <Pressable onPress={ex2}>
        <Text>Get item</Text>
      </Pressable>
      <Pressable onPress={ex3}>
        <Text>delete item</Text>
      </Pressable>

      <View style={styles.outputContainer}>
        <Text style={styles.outputTitle}>Output :</Text>
        <ScrollView style={styles.output}>
          <Text style={styles.outputText}>{output}</Text>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  outputContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    padding: 15,
  },
  outputTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  output: {
    flex: 1,
  },
  outputText: {
    color: "#00ff00",
    fontSize: 14,
    fontFamily: "monospace",
  },
});
