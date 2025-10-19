import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";

const Index = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>WhatsApp</Text>
        <Entypo name="dots-three-vertical" size={22} color="white" />
      </View>
      <View style={styles.textInputParent}>
        <TextInput
          placeholder="Search..."
          style={styles.textInput}
          placeholderTextColor="white"
        />
      </View>

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.text}>index</Text>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1014",
    paddingTop: 50, // keeps it away from notch
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#0B1014",
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },

  textInput: {
    color: "white",
    width: "95%",
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "#23282C",
    borderRadius: 100,
    padding: 15,
    paddingLeft: 20,
  },
  textInputParent: {
    justifyContent: "center",
    alignItems: "center",
  },
});
