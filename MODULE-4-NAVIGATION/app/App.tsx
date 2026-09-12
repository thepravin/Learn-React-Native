import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import About from "./screens/about";
import Details from "./screens/details";
import HOME from "./screens/home";

const Stack = createNativeStackNavigator();

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
    </Stack.Navigator>
  );
}

export default function App() {
  return <RootStack />;
}
