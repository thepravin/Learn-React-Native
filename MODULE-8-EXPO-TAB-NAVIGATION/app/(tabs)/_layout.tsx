import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: "Home 🏡",
          tabBarIcon: () => <FontAwesome name="home" size={24} />,
        }}
      />
      <Tabs.Screen
        name="Feed"
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: () => <FontAwesome name="list" size={24} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => <FontAwesome name="user" size={24} />,
        }}
      />
    </Tabs>
  );
}
