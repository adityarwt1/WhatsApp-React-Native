import React from "react";
import { StyleSheet, Text, View } from "react-native";

const index = () => {
  return (
    <>
      <View style={styles.constainer}>
        <Text style={styles.text}>index</Text>
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: "#0B1014",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
