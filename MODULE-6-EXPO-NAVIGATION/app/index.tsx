import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>index.tsx</Text>
      <Link href={"/Feed"}>Feed</Link>
      <Link href={"/Explore"}>Explore</Link>
      <Link href={"/profile/User"}>Profile/User</Link>
    </View>
  );
}
