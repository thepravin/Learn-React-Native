import LightMood from "@/components/LightMood";
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
      {/* <TitleCounter />  {/* Accelerometer */}
      {/* <RotationIndicator /> */}
      {/* <Compass /> */}
      <LightMood />
    </View>
  );
}
