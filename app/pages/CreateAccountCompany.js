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

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

const CreateAccountCompany = ({ navigation }) => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("User registered successfully ✅");

        setEmail("");
        setPassword("");
        setName("");

        navigation.navigate("BottomTab"); // move after success
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <ScrollView style={{ height: "100%" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f3f0f8",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Create an Account
        </Text>

        <Text style={{ color: "grey" }}>Please register from below</Text>

        {/* Name Field */}
        <TextInput
          placeholder="Name"
           value={Name}
          onChangeText={setName}
          style={{
            borderWidth: 1,
            width: "80%",
            height: 50,
            borderRadius: 10,
            marginTop: 40,
            backgroundColor: "white",
            paddingLeft: 10,
          }}
        />

        {/* Email Field */}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{
            borderWidth: 1,
            width: "80%",
            height: 50,
            borderRadius: 10,
            marginTop: 40,
            backgroundColor: "white",
            paddingLeft: 10,
          }}
        />

        {/* Password Field */}
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{
            borderWidth: 1,
            width: "80%",
            height: 50,
            borderRadius: 10,
            marginTop: 20,
            backgroundColor: "white",
            paddingLeft: 10,
          }}
        />

        {/* Error Message */}
        {errorMessage ? (
          <Text style={{ color: "red", marginTop: 10 }}>{errorMessage}</Text>
        ) : null}

        {/* Signup Button */}
        <TouchableOpacity
          onPress={handleSignup}
          style={{
            width: "50%",
            height: 50,
            backgroundColor: "#5a31f4",
            borderRadius: 10,
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={{ color: "grey", marginTop: 20 }}>
          Already have an account?
        </Text>

        {/* Navigate to Login */}
        <TouchableOpacity
          onPress={() => navigation.navigate("CompanyLogin")}
          style={{
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#5a31f4", fontSize: 16 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateAccountCompany;
