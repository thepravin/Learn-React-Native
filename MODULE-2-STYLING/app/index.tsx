import { StyleSheet, Text, View } from "react-native";
import React from "react";

/**
 
1. layout props ( flexbox) : direction of row, column

no grid support till now in RN

 */

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Styling</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero recusandae obcaecati, quod quae, ipsam, reiciendis amet non dignissimos ipsa enim quibusdam nemo tempora excepturi expedita quidem provident velit ratione fugiat.</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5",
    padding: 20,
    

    justifyContent:"center",
    alignItems:"center"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#e79a15ff",
    padding: 16,
    borderRadius: 10,
    alignItems:"center",  // by default display is flex no need to add and be default alignment is horizontal
    justifyContent:"center", // vertical alignment

    //android shadow
    elevation:5,

    // ios
    shadowColor:"#000",
    shadowOffset:{width:0, height:4},
    shadowOpacity:0.2,
    shadowRadius:6,
  },
  text: {
    fontSize: 16,
    textAlign:"right"
  },
});
