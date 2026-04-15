// import {  ScrollView, Text, View } from 'react-native'
// import React from 'react'

// const Profile = () => {
//   return (
//     <ScrollView style={{height:"100%"}}>
//     <View style={{flex:1, backgroundColor:"#f3f0f8"}}>
//       <Text>Profile</Text>
//     </View>

//     </ScrollView>
//   )
// }

// export default Profile


import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export default function CompanyProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [companyName, setCompanyName] = useState("TechSoft Pvt Ltd");
  const [email, setEmail] = useState("techsoft@gmail.com");
  const [location, setLocation] = useState("Lahore, Pakistan");
  const [website, setWebsite] = useState("www.techsoft.com");
  const [description, setDescription] = useState(
    "We are a software company hiring developers worldwide."
  );

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile Updated Successfully!");
  };

  return (
    <ScrollView style={styles.container}>
      
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.logo}
        />
        <Text style={styles.companyName}>{companyName}</Text>
      </View>

      {/* Profile Fields */}

      <View style={styles.card}>
        <Text style={styles.label}>Company Name</Text>
        <TextInput
          style={styles.input}
          value={companyName}
          editable={isEditing}
          onChangeText={setCompanyName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          editable={isEditing}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          value={location}
          editable={isEditing}
          onChangeText={setLocation}
        />

        <Text style={styles.label}>Website</Text>
        <TextInput
          style={styles.input}
          value={website}
          editable={isEditing}
          onChangeText={setWebsite}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={description}
          editable={isEditing}
          onChangeText={setDescription}
          multiline
        />
      </View>

      {/* Buttons */}

      {isEditing ? (
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.btnText}>Save Changes</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => setIsEditing(true)}
        >
          <Text style={styles.btnText}>Edit Profile</Text>
        </TouchableOpacity>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f0f8",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  companyName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5a31f4",
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
  },

  label: {
    marginTop: 10,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
  },

  editBtn: {
    backgroundColor: "#5a31f4",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  saveBtn: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
