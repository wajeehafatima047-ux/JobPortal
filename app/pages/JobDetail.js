import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function JobDetail({ route,navigation }) {
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job}</Text>
      <Text style={styles.salary}>$500 - $1,000</Text>
      <Text style={{ marginTop: 10 }}>location:pakistan</Text>

      <TouchableOpacity   onPress={()=>{navigation.navigate("ApplyJobForm")}} style={styles.btn}>
        <Text style={{ color: "#fff" }}>  Apply Now  </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  salary: {
    color: "purple",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#5b2eff",
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});