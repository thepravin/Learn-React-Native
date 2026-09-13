import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
      }}
    >
      <Link href={"/Feed"}>Feed</Link>
      <Link href={"/Explore"}>Explore</Link>
      <Link href={"/profile/User"}>Profile/User</Link>

      {/* dynamic routing */}
      <Link href={"/users/12/posts/009"}>/user/[userId]/posts/[postId]</Link>
      <Link
        href={{
          pathname: "/users/[userId]/posts/[postId]",
          params: {
            userId: "11112",
            postId: "00009",
          },
        }}
      >
        /user/[userId]/posts/[postId] : 2
      </Link>

      {/* catching all routes */}

      <Link href={"/admin/users/logs"}>Go logs</Link>
      <Link href={"/admin/reports/monthly"}>Monthly reports</Link>
    </View>
  );
}
