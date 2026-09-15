import Compass from "@/components/Compass";
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
      <Compass />
    </View>
  );
}
