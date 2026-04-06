// import React, { useState } from "react";
// import {
// View,
// Text,
// TextInput,
// FlatList,
// TouchableOpacity,
// StyleSheet,
// Modal,
// ScrollView
// } from "react-native";

// import * as DocumentPicker from "expo-document-picker";

// export default function EmployeeHome() {

// const [search, setSearch] = useState("");
// const [selectedJob, setSelectedJob] = useState(null);
// const [modalVisible, setModalVisible] = useState(false);
// const [cv, setCv] = useState(null);

// const jobs = [
// {
// id: "1",
// title: "React Native Developer",
// company: "TechSoft",
// location: "Lahore",
// salary: "80k - 120k",
// description: "We need a React Native developer with mobile app experience."
// },
// {
// id: "2",
// title: "Frontend Developer",
// company: "DevHub",
// location: "Karachi",
// salary: "70k - 100k",
// description: "Looking for a frontend developer skilled in React."
// },
// {
// id: "3",
// title: "UI/UX Designer",
// company: "Creative Studio",
// location: "Islamabad",
// salary: "60k - 90k",
// description: "Designer with Figma and mobile UI experience."
// }
// ];

// const filteredJobs = jobs.filter((job) =>
// job.title.toLowerCase().includes(search.toLowerCase())
// );

// const pickCV = async () => {
// const result = await DocumentPicker.getDocumentAsync({
// type: "application/pdf"
// });

// if (!result.canceled) {
// setCv(result.assets[0].name);
// }
// };

// const applyJob = () => {
// alert("Application Submitted Successfully!");
// setModalVisible(false);
// };

// const renderJob = ({ item }) => (
// <TouchableOpacity
// style={styles.jobCard}
// onPress={() => {
// setSelectedJob(item);
// setModalVisible(true);
// }}
// >

// <Text style={styles.jobTitle}>{item.title}</Text>
// <Text style={styles.company}>{item.company}</Text>
// <Text style={styles.location}>{item.location}</Text>
// <Text style={styles.salary}>{item.salary}</Text>

// </TouchableOpacity>
// );

// return (

// <View style={styles.container}>

// <Text style={styles.heading}>Find Your Job</Text>

// <TextInput
// placeholder="Search job..."
// style={styles.search}
// value={search}
// onChangeText={setSearch}
// />

// <FlatList
// data={filteredJobs}
// keyExtractor={(item) => item.id}
// renderItem={renderJob}
// />

// {/* Job Details Modal */}

// <Modal visible={modalVisible} animationType="slide">

// <ScrollView style={styles.modalContainer}>

// <Text style={styles.modalTitle}>{selectedJob?.title}</Text>

// <Text style={styles.company}>{selectedJob?.company}</Text>

// <Text style={styles.location}>{selectedJob?.location}</Text>

// <Text style={styles.salary}>{selectedJob?.salary}</Text>

// <Text style={styles.description}>
// {selectedJob?.description}
// </Text>

// <TouchableOpacity style={styles.uploadBtn} onPress={pickCV}>
// <Text style={styles.btnText}>
// {cv ? "CV Selected: " + cv : "Upload Resume (PDF)"}
// </Text>
// </TouchableOpacity>

// <TouchableOpacity style={styles.applyBtn} onPress={applyJob}>
// <Text style={styles.btnText}>Apply Job</Text>
// </TouchableOpacity>

// <TouchableOpacity
// style={styles.closeBtn}
// onPress={() => setModalVisible(false)}
// >
// <Text style={styles.btnText}>Close</Text>
// </TouchableOpacity>

// </ScrollView>

// </Modal>

// </View>

// );
// }

// const styles = StyleSheet.create({

// container:{
// flex:1,
// backgroundColor:"#f3f0f8",
// padding:20
// },

// heading:{
// fontSize:26,
// fontWeight:"bold",
// color:"#5a31f4",
// marginBottom:15
// },

// search:{
// backgroundColor:"#fff",
// padding:12,
// borderRadius:10,
// marginBottom:15
// },

// jobCard:{
// backgroundColor:"#fff",
// padding:15,
// borderRadius:12,
// marginBottom:12,
// shadowColor:"#000",
// shadowOpacity:0.1,
// shadowRadius:4,
// elevation:3
// },

// jobTitle:{
// fontSize:18,
// fontWeight:"bold",
// color:"#5a31f4"
// },

// company:{
// fontSize:16,
// marginTop:4
// },

// location:{
// color:"#666"
// },

// salary:{
// color:"#5a31f4",
// marginTop:5,
// fontWeight:"600"
// },

// modalContainer:{
// flex:1,
// backgroundColor:"#f3f0f8",
// padding:20
// },

// modalTitle:{
// fontSize:24,
// fontWeight:"bold",
// color:"#5a31f4"
// },

// description:{
// marginVertical:15,
// fontSize:15,
// lineHeight:22
// },

// uploadBtn:{
// backgroundColor:"#5a31f4",
// padding:14,
// borderRadius:10,
// alignItems:"center",
// marginTop:10
// },

// applyBtn:{
// backgroundColor:"#5a31f4",
// padding:14,
// borderRadius:10,
// alignItems:"center",
// marginTop:10
// },

// closeBtn:{
// backgroundColor:"#888",
// padding:12,
// borderRadius:10,
// alignItems:"center",
// marginTop:15
// },

// btnText:{
// color:"#fff",
// fontWeight:"bold"
// }

// });  


import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function HomeEmp() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.name}>Henry Kanwil</Text>
        </View>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.profile}
        />
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <TextInput placeholder="Search job here..." />
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.cardPurple}>
          <Text style={styles.bigText}>29</Text>
          <Text style={styles.smallText}>Jobs Applied</Text>
        </View>

        <View style={styles.cardBlue}>
          <Text style={styles.bigText}>3</Text>
          <Text style={styles.smallText}>Interviews</Text>
        </View>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categories}>
        {["⚡", "✏️", "📊", "🔤", "</>", "🗄️", "🔧", "💬"].map(
          (item, index) => (
            <View key={index} style={styles.categoryBox}>
              <Text>{item}</Text>
            </View>
          )
        )}
      </View>

      {/* Recommended */}
      <Text style={styles.sectionTitle}>Recommended Jobs</Text>
      <View style={styles.jobCard}>
        <Image
          source={{ uri: "https://via.placeholder.com/60" }}
          style={styles.jobImage}
        />
        <View>
          <Text style={styles.jobTitle}>Software Engineer</Text>
          <Text>Jakarta, Indonesia</Text>
          <Text style={styles.salary}>$500 - $1,000</Text>
        </View>
      </View>

      {/* Recent Jobs */}
      <View style={styles.rowBetween}>
        <Text style={styles.sectionTitle}>Recent Jobs</Text>
        <Text style={{ color: "purple" }}>More</Text>
      </View>

      {[
        "Junior Software Engineer",
        "Database Engineer",
        "Senior Software Engineer",
      ].map((job, index) => (
        <View key={index} style={styles.recentJob}>
          <View style={styles.logo}></View>
          <View>
            <Text style={styles.jobTitle}>{job}</Text>
            <Text style={styles.salary}>$500 - $1,000</Text>
            <Text>Location</Text>
          </View>
        </View>
      ))}

      {/* Bottom Navigation */}
      {/* <View style={styles.nav}>
        <Text style={styles.active}>Home</Text>
        <Text>Interviews</Text>
        <Text>Messages</Text>
        <Text>Account</Text>
      </View> */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  header: {
    backgroundColor: "#5b2eff",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  greeting: {
    color: "#fff",
  },

  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  searchBox: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 10,
    borderRadius: 20,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  cardPurple: {
    backgroundColor: "#5b2eff",
    padding: 20,
    borderRadius: 20,
    width: "40%",
  },

  cardBlue: {
    backgroundColor: "#4da6ff",
    padding: 20,
    borderRadius: 20,
    width: "40%",
  },

  bigText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  smallText: {
    color: "#fff",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 20,
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  categoryBox: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },

  jobCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 20,
    padding: 10,
    borderRadius: 15,
  },

  jobImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 10,
  },

  jobTitle: {
    fontWeight: "bold",
  },

  salary: {
    color: "purple",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },

  recentJob: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },

  logo: {
    width: 50,
    height: 50,
    backgroundColor: "#ddd",
    marginRight: 10,
    borderRadius: 10,
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#fff",
    marginTop: 20,
  },

  active: {
    color: "purple",
    fontWeight: "bold",
  },
});