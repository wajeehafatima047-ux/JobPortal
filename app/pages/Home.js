// import { ScrollView,StyleSheet, Text, View } from 'react-native'

// import { useSelector } from "react-redux";
// import React from 'react'

// const Home = () => {
//   return (
//      <ScrollView style={{ height: "100%" }}>
//     <View style={{flex:1, backgroundColor:"#f3f0f8"}}>
//       <Text>Home</Text>
//     </View>
//     </ScrollView>
//   )
// }

// export default Home

// const styles = StyleSheet.create({})

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";

export default function PostJob() {
  // Form States
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");

  // Jobs List State
  const [jobs, setJobs] = useState([]);

  // Add Job Function
  const handlePostJob = () => {
    if (!title || !company || !location || !salary || !description) {
      alert("Please fill all fields");
      return;
    }

    const newJob = {
      id: Date.now().toString(),
      title,
      company,
      location,
      salary,
      description,
    };

    setJobs([newJob, ...jobs]); // add new job on top

    // Clear form
    setTitle("");
    setCompany("");
    setLocation("");
    setSalary("");
    setDescription("");
  };

  // Render Each Job
  const renderJob = ({ item }) => (
    <View style={styles.jobCard}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text>{item.company}</Text>
      <Text>{item.location}</Text>
      <Text style={styles.salary}>{item.salary}</Text>
      <Text numberOfLines={2}>{item.description}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Post a Job</Text>

      {/* Input Fields */}

      <TextInput
        placeholder="Job Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Company Name"
        style={styles.input}
        value={company}
        onChangeText={setCompany}
      />

      <TextInput
        placeholder="Location"
        style={styles.input}
        value={location}
        onChangeText={setLocation}
      />

      <TextInput
        placeholder="Salary"
        style={styles.input}
        value={salary}
        onChangeText={setSalary}
      />

      <TextInput
        placeholder="Job Description"
        style={[styles.input, { height: 100 }]}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Post Button */}

      <TouchableOpacity style={styles.button} onPress={handlePostJob}>
        <Text style={styles.buttonText}>Post Job</Text>
      </TouchableOpacity>

      {/* Posted Jobs List */}

      <Text style={styles.subHeading}>Posted Jobs</Text>

      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={renderJob}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f3f0f8",
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5a31f4",
    marginBottom: 15,
  },

  subHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#5a31f4",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  jobCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5a31f4",
  },

  salary: {
    color: "green",
    marginVertical: 5,
  },
});
