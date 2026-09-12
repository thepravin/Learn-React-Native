import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./screens/about";
import Details from "./screens/details";
import HOME from "./screens/home";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home screen top" component={HOME} />
      <Stack.Screen name="details screen top" component={Details} />
      <Stack.Screen name="about" component={About} />
    </Stack.Navigator>
  );
}

export default function App() {
  return <RootStack />;
}
