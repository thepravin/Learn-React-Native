import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Image } from "expo-image";

export interface Vegetable {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  image: string;
}

export const vegetables: Vegetable[] = [
  {
    id: "1",
    name: "Carrot",
    category: "Root",
    price: 1.49,
    unit: "kg",
    description: "Crisp, sweet, and rich in beta-carotene.",
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "2",
    name: "Broccoli",
    category: "Cruciferous",
    price: 2.29,
    unit: "head",
    description: "Packed with fiber, vitamins C and K.",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "3",
    name: "Spinach",
    category: "Leafy Green",
    price: 1.99,
    unit: "bunch",
    description: "Fresh green leaves loaded with iron and antioxidants.",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "4",
    name: "Tomato",
    category: "Solanaceae",
    price: 2.49,
    unit: "kg",
    description: "Juicy red tomatoes rich in lycopene and vitamin C.",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "5",
    name: "Potato",
    category: "Tuber",
    price: 1.19,
    unit: "kg",
    description: "Versatile starchy potatoes, great for baking and mashing.",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "6",
    name: "Red Onion",
    category: "Allium",
    price: 1.79,
    unit: "kg",
    description: "Sharp and pungent, ideal for salads and cooked dishes.",
    image:
      "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "7",
    name: "Bell Pepper",
    category: "Solanaceae",
    price: 2.99,
    unit: "kg",
    description: "Sweet, crunchy peppers available in vivid red and yellow.",
    image:
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "8",
    name: "Cucumber",
    category: "Gourd",
    price: 0.99,
    unit: "piece",
    description: "Refreshing and hydrating with a crisp texture.",
    image:
      "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "9",
    name: "Cauliflower",
    category: "Cruciferous",
    price: 2.49,
    unit: "head",
    description: "Mild and tender white florets, ideal for roasting.",
    image:
      "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "10",
    name: "Eggplant",
    category: "Solanaceae",
    price: 2.19,
    unit: "kg",
    description: "Deep purple skin with a tender, meaty interior.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "11",
    name: "Garlic",
    category: "Allium",
    price: 0.79,
    unit: "bulb",
    description: "Aromatic bulbs essential for flavoring savoury recipes.",
    image:
      "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "12",
    name: "Green Cabbage",
    category: "Cruciferous",
    price: 1.39,
    unit: "head",
    description: "Dense, leafy head great for slaws, braises, and stir-fries.",
    image:
      "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "13",
    name: "Romaine Lettuce",
    category: "Leafy Green",
    price: 1.89,
    unit: "head",
    description: "Crisp and sturdy ribs, the classic base for Caesar salad.",
    image:
      "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "14",
    name: "Zucchini",
    category: "Gourd",
    price: 1.99,
    unit: "kg",
    description: "Tender summer squash suitable for grilling and sautéing.",
    image:
      "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "15",
    name: "Button Mushroom",
    category: "Fungus",
    price: 2.79,
    unit: "pack",
    description: "Earthy and savory, perfect for sautés and pasta dishes.",
    image:
      "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "16",
    name: "Green Peas",
    category: "Legume",
    price: 2.09,
    unit: "kg",
    description: "Sweet, tender green spheres packed with plant protein.",
    image:
      "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "17",
    name: "Radish",
    category: "Root",
    price: 1.29,
    unit: "bunch",
    description: "Peppery, crunchy root vegetables great for salads.",
    image:
      "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "18",
    name: "Sweet Potato",
    category: "Tuber",
    price: 2.19,
    unit: "kg",
    description: "Naturally sweet orange flesh loaded with vitamin A.",
    image:
      "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "19",
    name: "Beetroot",
    category: "Root",
    price: 1.69,
    unit: "kg",
    description: "Vibrant ruby-red roots with an earthy, sweet flavor.",
    image:
      "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "20",
    name: "Asparagus",
    category: "Shoot",
    price: 3.49,
    unit: "bunch",
    description: "Tender green spears delicious when roasted or steamed.",
    image:
      "https://images.unsplash.com/photo-1515471204630-e60b3799863d?w=500&auto=format&fit=crop&q=60",
  },
];

export interface VegItem {
  id: string;
  name: string;
  image: string;
}

export interface VegSection {
  title: string;
  data: VegItem[];
}

export const vegSections: VegSection[] = [
  {
    title: "Root Vegetables",
    data: [
      {
        id: "root-1",
        name: "Carrot",
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "root-2",
        name: "Radish",
        image: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "root-3",
        name: "Beetroot",
        image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    title: "Leafy Greens",
    data: [
      {
        id: "leaf-1",
        name: "Spinach",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "leaf-2",
        name: "Romaine Lettuce",
        image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "leaf-3",
        name: "Kale",
        image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6fa57?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    title: "Cruciferous",
    data: [
      {
        id: "cruc-1",
        name: "Broccoli",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "cruc-2",
        name: "Cauliflower",
        image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "cruc-3",
        name: "Green Cabbage",
        image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    title: "Nightshades",
    data: [
      {
        id: "night-1",
        name: "Tomato",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "night-2",
        name: "Eggplant",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "night-3",
        name: "Bell Pepper",
        image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    title: "Alliums",
    data: [
      {
        id: "allium-1",
        name: "Red Onion",
        image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "allium-2",
        name: "Garlic",
        image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "allium-3",
        name: "Spring Onion",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    title: "Tubers",
    data: [
      {
        id: "tuber-1",
        name: "Potato",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "tuber-2",
        name: "Sweet Potato",
        image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    title: "Gourds & Squashes",
    data: [
      {
        id: "gourd-1",
        name: "Cucumber",
        image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "gourd-2",
        name: "Zucchini",
        image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    title: "Legumes & Pods",
    data: [
      {
        id: "legume-1",
        name: "Green Peas",
        image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "legume-2",
        name: "Green Beans",
        image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    title: "Mushrooms",
    data: [
      {
        id: "fungus-1",
        name: "Button Mushroom",
        image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "fungus-2",
        name: "Portobello",
        image: "https://images.unsplash.com/photo-1589135233689-d56d6168e9e1?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    title: "Stems & Shoots",
    data: [
      {
        id: "stem-1",
        name: "Asparagus",
        image: "https://images.unsplash.com/photo-1515471204630-e60b3799863d?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: "stem-2",
        name: "Celery",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
];

const index = () => {
  return (
    // <ScrollView>
    //   <Text>Hello</Text>
    //   <Image
    //     source={require("../assets/images/android-icon-monochrome.png")}
    //     style={styles.image}
    //     contentFit="contain"
    //   />
    //   <Image
    //     source={{
    //       uri: "https://tse3.mm.bing.net/th/id/OIP.4F7wau4U1BybrEbeUYVjlgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    //     }}
    //     style={{
    //       width: 100,
    //       height: 100,
    //     }}
    //   />

    //   <Button
    //     onPress={() => alert("Button press")}
    //     title="Button title"
    //     color="#841584"
    //     accessibilityLabel="Button accessibility Label"
    //   />

    //   <TextInput
    //     placeholder="enter your name please"
    //     style={{
    //       borderWidth: 1,
    //       padding: 10,
    //       margin: 20,
    //     }}
    //   />

    //   <Pressable
    //     onPress={() => alert("Button Pressed!")}
    //     style={{
    //       marginBottom: 40,
    //     }}
    //   >
    //     <Text>Click Me</Text>
    //   </Pressable>
    // </ScrollView>

    //********** FlatList ********************

    // <View style={styles.container}>
    //   <FlatList
    //     data={vegetables}
    //     keyExtractor={(item) => item.id}
    //     renderItem={({ item }) => (
    //       <View style={styles.card}>
    //         <Image
    //           source={{ uri: item.image }}
    //           style={{
    //             width: 80,
    //             height: 80,
    //             borderRadius: 8,
    //             marginRight: 10,
    //           }}
    //           contentFit="cover"
    //         />
    //         <Text style={styles.title}>{item.name}</Text>
    //       </View>
    //     )}
    //     // horizontal={true}
    //     // numColumns={2}
    //     ListHeaderComponent={() => <Text>Header</Text>}
    //     ListFooterComponent={() => <Text>Footer</Text>}
    //     ItemSeparatorComponent={() => (
    //       <View style={{ height: 10, backgroundColor: "#ccc" }} />
    //     )}
    //   />
    // </View>

    // ***************** sectionlist ****************
   <SectionList
   sections={vegSections}
   keyExtractor={(item)=>item.id}

   renderItem={({item})=>(
    <View style={styles.card}>
      <Image
      source={{uri:item.image}}
      style={styles.image}
      />
      <Text style={styles.title}>{item.name}</Text>
    </View>
   )}

   renderSectionHeader={({section})=>(
    <Text style={styles.header} >{section.title}</Text>
   )}
   
   />


  );
};

export default index;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 18,
  },
  container: {
    margin: 10,
  },
  header:{
    fontSize: 20,
    color:"#841584"
  }
});
