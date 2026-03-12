import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function RoleSelectScreen({navigation}) {

  return (
    <View style={styles.container}>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>J</Text>
        <Text style={styles.title}>Jobie</Text>
        <Text style={styles.subtitle}>Job Portal </Text>
      </View>

      <Text style={styles.heading}>Continue as</Text>

      {/* Job Seeker Card */}
      <TouchableOpacity
        style={styles.card}
        onPress={()=> navigation.navigate("JobSeekerLogin")}
      >
        <Text style={styles.cardTitle}>JOB SEEKERS</Text>
        <Text>Finding a job here never been easier</Text>
      </TouchableOpacity>

      {/* Company Card */}
      <TouchableOpacity
        style={styles.card}
        onPress={()=> navigation.navigate("CompanyLogin")}
      >
        <Text style={styles.cardTitle}>COMPANY</Text>
        <Text>Let’s recruit your great candidate faster</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f3f0f8",
alignItems:"center",
paddingTop:80
},

logoContainer:{
alignItems:"center",
marginBottom:40
},

logo:{
fontSize:50,
color:"#fff",
backgroundColor:"#5a31f4",
width:80,
height:80,
textAlign:"center",
borderRadius:40,
lineHeight:80,
fontWeight:"bold"
},

title:{
fontSize:28,
fontWeight:"bold",
marginTop:10
},

subtitle:{
color:"gray"
},

heading:{
fontSize:22,
fontWeight:"bold",
marginBottom:20
},

card:{
width:"85%",
backgroundColor:"#fff",
padding:20,
borderRadius:15,
marginBottom:20,
elevation:4
},

cardTitle:{
color:"#5a31f4",
fontWeight:"bold",
marginBottom:5
}

});