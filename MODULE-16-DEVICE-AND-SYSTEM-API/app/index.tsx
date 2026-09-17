import BatteryExample from "@/components/battery/BatteryExample";
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
      {/* <NetworkDetails /> */}
      {/* <BasicLinking /> */}
      {/* <DeepLinking /> */}
      {/* <PressHaptics /> */}
      {/* <App /> */}
      <BatteryExample />
    </View>
  );
}
