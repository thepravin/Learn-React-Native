import NetworkDetails from "@/components/NetworkDetails";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <NetworkCheck /> */}
      {/* <NetworkListener /> */}
      <NetworkDetails />
    </View>
  );
}
