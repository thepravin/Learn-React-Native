# Navigation in Expo Router

This module covers navigation patterns and implementations using **Expo Router (v6)** on **Expo SDK 54**, built on top of **React Navigation (v7)**.

---

## 🧭 Navigation Patterns

### 1. Stack Navigation

Screens are arranged in a stack where new screens are pushed on top, and going back pops the top screen.

- **Layout File:** `app/_layout.tsx`
- **Component:** `<Stack />` from `expo-router`

```tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Home screen */}
      <Stack.Screen name="index" options={{ title: "Home" }} />

      {/* Details screen */}
      <Stack.Screen name="details" options={{ title: "Details" }} />

      {/* Modal screen presentation */}
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          title: "Modal Screen",
        }}
      />
    </Stack>
  );
}
```

---

### 2. Tab Navigation

Displays a persistent bottom navigation bar to switch between primary views.

- **Folder Group:** `app/(tabs)/`
- **Layout File:** `app/(tabs)/_layout.tsx`
- **Component:** `<Tabs />` from `expo-router`

```tsx
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#007AFF" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "compass" : "compass-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
```

---

### 3. Drawer Navigation

> **Note on Drawer Navigation:** Drawer navigation uses `@react-navigation/drawer`. To use it in Expo Router, install:
>
> ```bash
> npx expo install @react-navigation/drawer
> ```

Displays a side drawer navigation menu that slides in from the edge of the screen.

- **Component:** `<Drawer />` from `expo-router/drawer`
- **Requirement:** `@react-navigation/drawer`

```tsx
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="index"
        options={{ drawerLabel: "Home", title: "Overview" }}
      />
      <Drawer.Screen
        name="settings"
        options={{ drawerLabel: "Settings", title: "Settings" }}
      />
    </Drawer>
  );
}
```

---

### 4. Modal Navigation

Presents a screen modally over the current screen context (slides up from the bottom on iOS).

Configured via the `options.presentation` property on a `Stack.Screen`:

```tsx
<Stack.Screen
  name="modal"
  options={{
    presentation: "modal",
    headerShown: true,
    title: "Modal",
  }}
/>
```

---

## 🚀 How to Navigate

### Declarative Navigation with `<Link>`

```tsx
import { Link } from "expo-router";
import { Text, Pressable } from "react-native";

<Link href="/details" asChild>
  <Pressable>
    <Text>Go to Details</Text>
  </Pressable>
</Link>;
```

### Programmatic Navigation with `useRouter`

```tsx
import { useRouter } from "expo-router";
import { Button } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <>
      {/* Push to new screen */}
      <Button title="Go to Details" onPress={() => router.push("/details")} />

      {/* Replace current screen */}
      <Button
        title="Replace with Profile"
        onPress={() => router.replace("/profile")}
      />

      {/* Navigate back */}
      <Button title="Back" onPress={() => router.back()} />
    </>
  );
}
```

### Passing and Reading Parameters

- **Navigate with params:**
  ```tsx
  router.push({
    pathname: "/user/[id]",
    params: { id: "42", name: "Alex" },
  });
  ```
- **Read params:**

  ```tsx
  import { useLocalSearchParams } from "expo-router";

  export default function UserScreen() {
    const { id, name } = useLocalSearchParams<{ id: string; name: string }>();
    return (
      <Text>
        User ID: {id}, Name: {name}
      </Text>
    );
  }
  ```

---

## 📁 File & Folder Routing Conventions

| File / Folder        | Route Path  | Description                                                        |
| :------------------- | :---------- | :----------------------------------------------------------------- |
| `app/index.tsx`      | `/`         | Root home screen.                                                  |
| `app/about.tsx`      | `/about`    | Static page.                                                       |
| `app/user/[id].tsx`  | `/user/123` | Dynamic route segment matching any parameter.                      |
| `app/_layout.tsx`    | —           | Root layout wrapper (navigators, providers, headers).              |
| `app/(group)/`       | —           | Route group used to organize files without affecting the URL path. |
| `app/+not-found.tsx` | —           | Fallback screen shown when no matching route is found.             |

4. Modal screens
