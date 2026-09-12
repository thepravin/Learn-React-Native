import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import About from "./screens/about";
import Details from "./screens/details";
import HOME from "./screens/home";
import ModalScreen from "./screens/model-screen";
import TabDetails from "./tab-screens/details";
import TabHome from "./tab-screens/home";
import TabProfile from "./tab-screens/profile";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "#f4511e",
        tabBarActiveTintColor: "#8dd422",

        tabBarInactiveBackgroundColor: "#ebbef1",
        tabBarInactiveTintColor: "#2bcacf",

        tabBarStyle: {
          backgroundColor: "#09ec11",
          borderTopWidth: 2,
          borderTopColor: "#2918e8",
        },

        headerStyle: {
          backgroundColor: "#222",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          // color: "#fff", // <-- overide the tint color
        },
        headerTintColor: "#e71515",
      }}
    >
      <Tab.Screen
        name="home"
        component={TabHome}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="details"
        component={TabDetails}
        options={{
          title: "Details",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="folder" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={TabProfile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // common screen options/styling
        headerStyle: {
          backgroundColor: "#222",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#fff",
        },
      }}
    >
      <Stack.Screen
        name="home screen top"
        component={HOME}
        options={{
          title: "My Home Title 🏡",
          headerStyle: {
            backgroundColor: "#222",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          headerRight: () => (
            <Pressable
              onPress={() => alert("This is a header button...")}
              style={{
                backgroundColor: "#e10f0f",
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Info</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="details screen top"
        component={Details}
        initialParams={{ itemId: 1000 }}
        options={{
          // change back arrow styling

          headerTintColor: "#00E0FF",
          // headerTitle: "Back Button",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <Stack.Screen name="about" component={About} />

      <Stack.Screen
        name="model"
        component={ModalScreen}
        options={{
          title: "Model title",

          // presentation: "formSheet",
          // sheetAllowedDetents: [0.5, 0.9], // Can slide between 50% and 90%
          // sheetGrabberVisible: true, // Shows the little handle bar at the top
          // gestureEnabled: false,

          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return <RootStack />;
  // return <TabNavigator />;
}
