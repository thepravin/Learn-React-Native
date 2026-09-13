import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#e16161",
        },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold", fontSize: 30 },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="About"
        options={{
          presentation: "formSheet",
          // presentation: "modal",
          title: "About",
        }}
      />
      <Stack.Screen name="Profile" />
    </Stack>
  );
}
