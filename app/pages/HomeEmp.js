import React, { useState } from "react";
import {
View,
Text,
TextInput,
FlatList,
TouchableOpacity,
StyleSheet,
Modal,
ScrollView
} from "react-native";

import * as DocumentPicker from "expo-document-picker";

export default function EmployeeHome() {

const [search, setSearch] = useState("");
const [selectedJob, setSelectedJob] = useState(null);
const [modalVisible, setModalVisible] = useState(false);
const [cv, setCv] = useState(null);

const jobs = [
{
id: "1",
title: "React Native Developer",
company: "TechSoft",
location: "Lahore",
salary: "80k - 120k",
description: "We need a React Native developer with mobile app experience."
},
{
id: "2",
title: "Frontend Developer",
company: "DevHub",
location: "Karachi",
salary: "70k - 100k",
description: "Looking for a frontend developer skilled in React."
},
{
id: "3",
title: "UI/UX Designer",
company: "Creative Studio",
location: "Islamabad",
salary: "60k - 90k",
description: "Designer with Figma and mobile UI experience."
}
];

const filteredJobs = jobs.filter((job) =>
job.title.toLowerCase().includes(search.toLowerCase())
);

const pickCV = async () => {
const result = await DocumentPicker.getDocumentAsync({
type: "application/pdf"
});

if (!result.canceled) {
setCv(result.assets[0].name);
}
};

const applyJob = () => {
alert("Application Submitted Successfully!");
setModalVisible(false);
};

const renderJob = ({ item }) => (
<TouchableOpacity
style={styles.jobCard}
onPress={() => {
setSelectedJob(item);
setModalVisible(true);
}}
>

<Text style={styles.jobTitle}>{item.title}</Text>
<Text style={styles.company}>{item.company}</Text>
<Text style={styles.location}>{item.location}</Text>
<Text style={styles.salary}>{item.salary}</Text>

</TouchableOpacity>
);

return (

<View style={styles.container}>

<Text style={styles.heading}>Find Your Job</Text>

<TextInput
placeholder="Search job..."
style={styles.search}
value={search}
onChangeText={setSearch}
/>

<FlatList
data={filteredJobs}
keyExtractor={(item) => item.id}
renderItem={renderJob}
/>

{/* Job Details Modal */}

<Modal visible={modalVisible} animationType="slide">

<ScrollView style={styles.modalContainer}>

<Text style={styles.modalTitle}>{selectedJob?.title}</Text>

<Text style={styles.company}>{selectedJob?.company}</Text>

<Text style={styles.location}>{selectedJob?.location}</Text>

<Text style={styles.salary}>{selectedJob?.salary}</Text>

<Text style={styles.description}>
{selectedJob?.description}
</Text>

<TouchableOpacity style={styles.uploadBtn} onPress={pickCV}>
<Text style={styles.btnText}>
{cv ? "CV Selected: " + cv : "Upload Resume (PDF)"}
</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.applyBtn} onPress={applyJob}>
<Text style={styles.btnText}>Apply Job</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.closeBtn}
onPress={() => setModalVisible(false)}
>
<Text style={styles.btnText}>Close</Text>
</TouchableOpacity>

</ScrollView>

</Modal>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f3f0f8",
padding:20
},

heading:{
fontSize:26,
fontWeight:"bold",
color:"#5a31f4",
marginBottom:15
},

search:{
backgroundColor:"#fff",
padding:12,
borderRadius:10,
marginBottom:15
},

jobCard:{
backgroundColor:"#fff",
padding:15,
borderRadius:12,
marginBottom:12,
shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:4,
elevation:3
},

jobTitle:{
fontSize:18,
fontWeight:"bold",
color:"#5a31f4"
},

company:{
fontSize:16,
marginTop:4
},

location:{
color:"#666"
},

salary:{
color:"#5a31f4",
marginTop:5,
fontWeight:"600"
},

modalContainer:{
flex:1,
backgroundColor:"#f3f0f8",
padding:20
},

modalTitle:{
fontSize:24,
fontWeight:"bold",
color:"#5a31f4"
},

description:{
marginVertical:15,
fontSize:15,
lineHeight:22
},

uploadBtn:{
backgroundColor:"#5a31f4",
padding:14,
borderRadius:10,
alignItems:"center",
marginTop:10
},

applyBtn:{
backgroundColor:"#5a31f4",
padding:14,
borderRadius:10,
alignItems:"center",
marginTop:10
},

closeBtn:{
backgroundColor:"#888",
padding:12,
borderRadius:10,
alignItems:"center",
marginTop:15
},

btnText:{
color:"#fff",
fontWeight:"bold"
}

});