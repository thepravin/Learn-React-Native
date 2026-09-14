import NewsFeed from "@/components/NewsFeed";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      <NewsFeed />
    </SafeAreaView>
  );
}
