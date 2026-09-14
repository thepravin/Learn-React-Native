import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerActiveBackgroundColor: "#eff6ff",
        drawerActiveTintColor: "#0f0f10",
        drawerInactiveTintColor: "#64748b",
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          drawerIcon: () => <FontAwesome name="home" size={24} />,
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          drawerIcon: ({ focused }) => (
            <FontAwesome name={focused ? "user" : "user-o"} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          drawerIcon: () => <FontAwesome name="gear" size={24} />,
        }}
      />
      <Drawer.Screen
        name="dashboard"
        options={{
          drawerLabel: "Dashboard",
          drawerIcon: () => <FontAwesome name="bar-chart" size={24} />,
        }}
      />
    </Drawer>
  );
}
