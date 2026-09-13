import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Link
        href={"/About"}
        style={{ fontWeight: "bold", fontSize: 20, color: "blue" }}
      >
        Go to about
      </Link>
      <Link
        href={"/Profile"}
        style={{ fontWeight: "bold", fontSize: 20, color: "green" }}
      >
        Go to Profile
      </Link>
    </View>
  );
}
