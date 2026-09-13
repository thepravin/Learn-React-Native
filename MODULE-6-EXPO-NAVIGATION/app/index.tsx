import { Href, Link } from "expo-router";
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
      <Link href={"/users/12/posts/009" as Href}>
        /user/[userId]/posts/[postId]
      </Link>
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

      <Link href={"/admin/users/logs" as Href}>Go logs</Link>
      <Link href={"/admin/reports/monthly" as Href}>Monthly reports</Link>

      {/* custom not found */}
      <Link href={"/Feed/notfound" as Href}>Feed not found page</Link>
    </View>
  );
}
