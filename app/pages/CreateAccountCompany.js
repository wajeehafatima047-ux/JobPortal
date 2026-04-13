// import React,{useState} from "react";
// import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";
// import createUserWithEmailAndPassword from 'firebase/auth';
// import {auth} from '../firebase.cofig'

// const CreateAccountCompany = ({navigation}) => {
//   const [email,setEmail]=useState('');
//     const [password,setPassword]=useState('');
//       const [errorMeaasge,setErrorMeaasge]=useState('');
//       const handleSignup=()=>{

//         createUserWithEmailAndPassword(auth,email,password)
//         .then((userCredential)=>{
//           const user=userCredential.user
//           alert('user register successfully')
//           setEmail('');
//             setPassword('');

//         })
//         .catch((error)=>{
//            const errorMsg=error.message;
//            setErrorMeaasge(errorMsg)

//         })
//       }

//   return (
//     <ScrollView style={{ height: "100%" }}>
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#f3f0f8", }}>

//         <Text style={{ fontSize: 24, fontWeight: "bold" }}>
//           Create an Account
//         </Text>

//         <Text style={{ color: "grey" }}>
//           Please registered form below
//         </Text>

//         {/* Name Field */}
//         <TextInput
//           placeholder="Name"
//           style={{
//             borderWidth: 1,
//             width: "80%",
//             height: 50,
//             borderRadius: 10,
//             marginTop: 40,
//             backgroundColor: "white",
//             paddingLeft: 10,
//           }}
//         />

//         {/* Email Field */}
//         <TextInput
//           placeholder="Email";
//           value{email};
//           onChangeText{setEmail}
//           style={{
//             borderWidth: 1,
//             width: "80%",
//             height: 50,
//             borderRadius: 10,
//             marginTop: 40,
//             backgroundColor: "white",
//             paddingLeft: 10,
//           }}
//         />

//         {/* Password Field */}
//         <TextInput
//           placeholder="Password"
//           secureTextEntry
//           style={{
//             borderWidth: 1,
//             width: "80%",
//             height: 50,
//             borderRadius: 10,
//             marginTop: 40,
//             backgroundColor: "white",
//             paddingLeft: 10,
//           }}
//         />

//                  {/* LogiN Button  */}
//          <TouchableOpacity
//            onPress={()=>{navigation.navigate("BottomTab")}}
//           style={{
//             width: "20%",
//             height: 30,
//             backgroundColor: "#5a31f4",
//             borderRadius: 10,
//             marginTop: 40,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Text style={{ fontSize: 20, color: "white" }}>
//             SignUp
//           </Text>
//         </TouchableOpacity>

//         <Text style={{color:"grey", gap:10}}>Already Have an account ?</Text>

//         {/* Create Account Button */}
//         <TouchableOpacity
//           //  onPress={   ()=> navigation.navigate("CompanyLogin")    }
//            onPress={handleSignup}
//           style={{
//             width: "50%",
//             height: 50,
//             backgroundColor:"#5a31f4",
//             borderRadius: 10,
//             marginTop: 40,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Text style={{ fontSize: 20, color: "white" }}>
//             Login
//           </Text>
//         </TouchableOpacity>

//       </View>
//     </ScrollView>
//   );
// };

// export default CreateAccountCompany';

import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase.config";

const CreateAccountCompany = ({ navigation }) => {
  const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");
   const [emailSent, setEmailSent] = useState(false);
 
   // ✅ Correct higher order function
   const handleInputChange = (setter) => (value) => {
     setter(value);
     if (errorMessage) setErrorMessage("");
   };
 
   const handleSignup = async () => {
     if (!email || !password) {
       setErrorMessage("Please fill all fields");
       return;
     }
 
     try {
       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       const user = userCredential.user;
 
       // ✅ send verification email
       await sendEmailVerification(user);
 
       setEmailSent(true);
       alert("Verification email sent! 📩");
 
       setEmail("");
       setPassword("");
       setName("");
 
 
 
     } catch (error) {
       setErrorMessage(error.message);
     }
   };
 
   return (
     <ScrollView style={{ height: "100%" }}>
       <View
         style={{
           flex: 1,
           justifyContent: "center",
           alignItems: "center",
           backgroundColor: "#f3f0f8",
           paddingTop: 80,
         }}
       >
         <Text style={{ fontSize: 24, fontWeight: "bold" }}>Sign Up</Text>
 
         <Text style={{ color: "grey" }}>
           Please register from below
         </Text>
 
         {/* Name */}
         <TextInput
           placeholder="Name"
           value={name}
           onChangeText={handleInputChange(setName)}
           style={styles.input}
         />
 
         {/* Email */}
         <TextInput
           placeholder="Email"
           value={email}
           onChangeText={handleInputChange(setEmail)}
           style={styles.input}
         />
 
         {/* Password */}
         <TextInput
           placeholder="Password"
           value={password}
           onChangeText={handleInputChange(setPassword)}
           secureTextEntry
           style={styles.input}
         />
 
         {/* Error */}
         {errorMessage ? (
           <Text style={{ color: "red", marginTop: 10 }}>
             {errorMessage}
           </Text>
         ) : null}
 
         {/* ✅ Show button only if email not sent */}
         {!emailSent && (
           <TouchableOpacity onPress={handleSignup} style={styles.button}>
             <Text style={{ fontSize: 18, color: "white" }}>
               Sign Up
             </Text>
           </TouchableOpacity>
         )}
 
         {/* ✅ Show message after email sent */}
         {emailSent && (
           <Text style={{ marginTop: 20, color: "green", textAlign: "center" }}>
             Verification email sent 📩  
             Please verify before login.
           </Text>
         )}
 
         <Text style={{ color: "grey", marginTop: 20 }}>
           Already have an account?
         </Text>
 
         <TouchableOpacity
           onPress={() => navigation.navigate("JobSeekerLogin")}
         >
           <Text style={{ color: "#5a31f4", marginTop: 10 }}>
             Login
           </Text>
         </TouchableOpacity>
       </View>
     </ScrollView>
   );
 };
 
 const styles = {
   input: {
     borderWidth: 1,
     width: "80%",
     height: 50,
     borderRadius: 10,
     marginTop: 20,
     backgroundColor: "white",
     paddingLeft: 10,
   },
 
   button: {
     width: "50%",
     height: 50,
     backgroundColor: "#5a31f4",
     borderRadius: 10,
     marginTop: 40,
     justifyContent: "center",
     alignItems: "center",
   },
 };
 
 
export default CreateAccountCompany;
