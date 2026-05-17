


// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";

// export default function App() {
//   return (
//     <ScrollView style={styles.container}>

//       {/* Header Background */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Account</Text>
//       </View>

//       {/* Profile Image */}
//       <View style={styles.profileContainer}>
//         <Image
//           source={{ uri: "https://i.pravatar.cc/150" }}
//           style={styles.profileImage}
//         />
//       </View>

//       {/* User Info */}
//       <View style={styles.info}>
//         <Text style={styles.name}>Henry Kanwil</Text>
//         <Text style={styles.role}>Programmer</Text>
//         <Text style={styles.desc}>
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         </Text>
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.actions}>
//         <TouchableOpacity style={styles.iconBtn}>
//           <Text>📞</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconBtn}>
//           <Text>✉️</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconBtn}>
//           <Text>📍</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Resume Card */}
//       <View style={styles.resumeCard}>
//         <View>
//           <Text style={styles.resumeTitle}>My Resume</Text>
//           <Text style={styles.resumeFile}>david_resume.pdf</Text>
//         </View>
//         <Text style={{ color: "#fff", fontSize: 20 }}>⋮</Text>
//       </View>

//       {/* Skills */}
//       <Text style={styles.sectionTitle}>Skill</Text>

//       <View style={styles.skills}>
//         {[
//           { name: "PHP", percent: "86%" },
//           { name: "Java", percent: "48%" },
//           { name: "MySQL", percent: "56%" },
//           { name: "React N", percent: "34%" },
//           { name: "CSS", percent: "86%" },
//         ].map((item, index) => (
//           <View key={index} style={styles.skillBox}>
//             <View style={styles.circle}>
//               <Text>{item.percent}</Text>
//             </View>
//             <Text style={styles.skillText}>{item.name}</Text>
//           </View>
//         ))}
//       </View>

//       {/* Bottom Navigation
//       <View style={styles.nav}>
//         <Text>Home</Text>
//         <Text>Interviews</Text>
//         <Text>Messages</Text>
//         <Text style={styles.active}>Account</Text>
//       </View> */}

//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f2f2f2",
//   },

//   header: {
//     height: 150,
//     backgroundColor: "#333",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   headerTitle: {
//     color: "#fff",
//     fontSize: 20,
//     fontWeight: "bold",
//   },

//   profileContainer: {
//     alignItems: "center",
//     marginTop: -50,
//   },

//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 4,
//     borderColor: "#fff",
//   },

//   info: {
//     alignItems: "center",
//     padding: 15,
//   },

//   name: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },

//   role: {
//     color: "gray",
//     marginBottom: 10,
//   },

//   desc: {
//     textAlign: "center",
//     color: "#666",
//   },

//   actions: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginVertical: 20,
//   },

//   iconBtn: {
//     backgroundColor: "#e6e6fa",
//     padding: 15,
//     borderRadius: 50,
//   },

//   resumeCard: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     backgroundColor: "#5b2eff",
//     margin: 20,
//     padding: 15,
//     borderRadius: 15,
//   },

//   resumeTitle: {
//     color: "#fff",
//     fontWeight: "bold",
//   },

//   resumeFile: {
//     color: "#ddd",
//   },

//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginLeft: 20,
//     marginTop: 10,
//   },

//   skills: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//   },

//   skillBox: {
//     width: 100,
//     height: 120,
//     backgroundColor: "#ddd",
//     margin: 10,
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   circle: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 5,
//   },

//   skillText: {
//     fontWeight: "bold",
//   },

//   nav: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 15,
//     backgroundColor: "#fff",
//     marginTop: 20,
//   },

//   active: {
//     color: "#5b2eff",
//     fontWeight: "bold",
//   },
// });


import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  StatusBar,
} from "react-native";

const COLORS = {
  primary: "#6C63FF",
  secondary: "#8B5CF6",
  background: "#F5F7FB",
  white: "#FFFFFF",
  text: "#111827",
  subText: "#6B7280",
  border: "#E5E7EB",
  danger: "#EF4444",
};

export default function ProfileEmp() {
  const [modalVisible, setModalVisible] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const [skills, setSkills] = useState([
    "React Native",
    "JavaScript",
    "Firebase",
    "UI/UX",
    "Node.js",
  ]);

  // Add Skill
  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
      setModalVisible(false);
    }
  };

  // Remove Skill
  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={{ color: "#fff", fontWeight: "600" }}>
              Edit Profile
            </Text>
          </TouchableOpacity>

          <View style={styles.profileWrapper}>
            <Image
              source={{
                uri: "https://i.pravatar.cc/300?img=12",
              }}
              style={styles.profileImage}
            />
          </View>
        </View>

        {/* USER INFO */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Henry Kanwil</Text>

          <Text style={styles.role}>
            Senior React Native Developer
          </Text>

          <Text style={styles.bio}>
            Passionate mobile app developer with experience
            building scalable and modern applications using
            React Native and Firebase.
          </Text>
        </View>

        {/* STATS */}
        <View style={styles.statsContainer}>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>29</Text>
            <Text style={styles.statsLabel}>Applied</Text>
          </View>

          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>12</Text>
            <Text style={styles.statsLabel}>Interviews</Text>
          </View>

          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>5</Text>
            <Text style={styles.statsLabel}>Projects</Text>
          </View>
        </View>

        {/* CONTACT
        <View style={styles.contactContainer}>
          <TouchableOpacity style={styles.contactBtn}>
            <Text style={styles.contactIcon}>📞</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactBtn}>
            <Text style={styles.contactIcon}>✉️</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactBtn}>
            <Text style={styles.contactIcon}>🌐</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactBtn}>
            <Text style={styles.contactIcon}>📍</Text>
          </TouchableOpacity>
        </View> */}

        {/* RESUME CARD */}
        <View style={styles.resumeCard}>
          <View>
            <Text style={styles.resumeTitle}>My Resume</Text>

            <Text style={styles.resumeFile}>
              henry_resume.pdf
            </Text>
          </View>

          <TouchableOpacity style={styles.downloadBtn}>
            <Text style={{ color: "#fff", fontWeight: "600" }}>
              View
            </Text>
          </TouchableOpacity>
        </View>

        {/* SKILLS */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Skills</Text>

          <TouchableOpacity
            style={styles.addSkillBtn}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.addSkillText}>+ Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={skills}
          numColumns={2}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.skillsContainer}
          renderItem={({ item, index }) => (
            <View style={styles.skillCard}>
              <Text style={styles.skillText}>{item}</Text>

              <TouchableOpacity
                style={styles.removeBtn}
                onPress={() => removeSkill(index)}
              >
                <Text style={styles.removeText}>✕</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>

      {/* ADD SKILL MODAL */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add New Skill</Text>

            <TextInput
              placeholder="Enter skill"
              value={newSkill}
              onChangeText={setNewSkill}
              style={styles.input}
              placeholderTextColor="#9CA3AF"
            />

            <TouchableOpacity
              style={styles.saveBtn}
              onPress={addSkill}
            >
              <Text style={styles.saveBtnText}>Save Skill</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    height: 260,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  editBtn: {
    position: "absolute",
    top: 60,
    right: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },

  profileWrapper: {
    backgroundColor: COLORS.white,
    padding: 5,
    borderRadius: 70,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  infoContainer: {
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 25,
  },

  name: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
  },

  role: {
    marginTop: 6,
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "600",
  },

  bio: {
    marginTop: 12,
    textAlign: "center",
    color: COLORS.subText,
    lineHeight: 22,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 28,
  },

  statsCard: {
    width: "31%",
    backgroundColor: COLORS.white,
    borderRadius: 22,
    paddingVertical: 22,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },

  statsNumber: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.primary,
  },

  statsLabel: {
    marginTop: 5,
    color: COLORS.subText,
  },

  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 28,
    marginHorizontal: 20,
  },

  contactBtn: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  contactIcon: {
    fontSize: 24,
  },

  resumeCard: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 24,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  resumeTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },

  resumeFile: {
    color: "#E5E7EB",
    marginTop: 8,
  },

  downloadBtn: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },

  sectionRow: {
    marginHorizontal: 20,
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text,
  },

  addSkillBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },

  addSkillText: {
    color: COLORS.white,
    fontWeight: "600",
  },

  skillsContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 40,
  },

  skillCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    margin: 6,
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },

  skillText: {
    color: COLORS.text,
    fontWeight: "600",
    fontSize: 15,
  },

  removeBtn: {
    width: 26,
    height: 26,
    backgroundColor: "#FEE2E2",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },

  removeText: {
    color: COLORS.danger,
    fontWeight: "700",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },

  modalContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 24,
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: COLORS.text,
  },

  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 55,
    fontSize: 15,
    color: COLORS.text,
  },

  saveBtn: {
    backgroundColor: COLORS.primary,
    marginTop: 20,
    height: 52,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  saveBtnText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 16,
  },

  cancelBtn: {
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  cancelText: {
    color: COLORS.subText,
    fontSize: 15,
  },
});