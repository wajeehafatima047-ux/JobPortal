// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ProfileEmp = () => {
//   return (
//     <View>
//       <Text>ProfileEmp</Text>
//     </View>
//   )
// }

// export default ProfileEmp

// const styles = StyleSheet.create({})


import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>

      {/* Header Background */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.profileImage}
        />
      </View>

      {/* User Info */}
      <View style={styles.info}>
        <Text style={styles.name}>Henry Kanwil</Text>
        <Text style={styles.role}>Programmer</Text>
        <Text style={styles.desc}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconBtn}>
          <Text>📞</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Text>✉️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Text>📍</Text>
        </TouchableOpacity>
      </View>

      {/* Resume Card */}
      <View style={styles.resumeCard}>
        <View>
          <Text style={styles.resumeTitle}>My Resume</Text>
          <Text style={styles.resumeFile}>david_resume.pdf</Text>
        </View>
        <Text style={{ color: "#fff", fontSize: 20 }}>⋮</Text>
      </View>

      {/* Skills */}
      <Text style={styles.sectionTitle}>Skill</Text>

      <View style={styles.skills}>
        {[
          { name: "PHP", percent: "86%" },
          { name: "Java", percent: "48%" },
          { name: "MySQL", percent: "56%" },
          { name: "React N", percent: "34%" },
          { name: "CSS", percent: "86%" },
        ].map((item, index) => (
          <View key={index} style={styles.skillBox}>
            <View style={styles.circle}>
              <Text>{item.percent}</Text>
            </View>
            <Text style={styles.skillText}>{item.name}</Text>
          </View>
        ))}
      </View>

      {/* Bottom Navigation
      <View style={styles.nav}>
        <Text>Home</Text>
        <Text>Interviews</Text>
        <Text>Messages</Text>
        <Text style={styles.active}>Account</Text>
      </View> */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  header: {
    height: 150,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  profileContainer: {
    alignItems: "center",
    marginTop: -50,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
  },

  info: {
    alignItems: "center",
    padding: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  role: {
    color: "gray",
    marginBottom: 10,
  },

  desc: {
    textAlign: "center",
    color: "#666",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },

  iconBtn: {
    backgroundColor: "#e6e6fa",
    padding: 15,
    borderRadius: 50,
  },

  resumeCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#5b2eff",
    margin: 20,
    padding: 15,
    borderRadius: 15,
  },

  resumeTitle: {
    color: "#fff",
    fontWeight: "bold",
  },

  resumeFile: {
    color: "#ddd",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },

  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  skillBox: {
    width: 100,
    height: 120,
    backgroundColor: "#ddd",
    margin: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },

  skillText: {
    fontWeight: "bold",
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#fff",
    marginTop: 20,
  },

  active: {
    color: "#5b2eff",
    fontWeight: "bold",
  },
});