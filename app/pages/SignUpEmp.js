import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import React,{useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

const SignUpEmp = ({navigation}) => {

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
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center",
    backgroundColor:"#f3f0f8",
    
    paddingTop:80 }}>
    
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
               SignUp
            </Text>
    
            <Text style={{ color: "grey" }}>
              Please registered form below
            </Text>

                {/* Name Field */}
                    <TextInput
                      placeholder="Name"
                      value={Name}
                      onChange={setName}
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
                marginTop: 40,
                backgroundColor: "white",
                paddingLeft: 10,
              }}
            />

             {/* Error Message */}
                            {errorMessage ? (
                              <Text style={{ color: "red", marginTop: 10 }}>{errorMessage}</Text>
                            ) : null}
            
    
    
                     {/* LogiN Button  */}
             <TouchableOpacity
               onPress={handleSignup}
              style={{
                width: "20%",
                height: 30,
                backgroundColor: "#5a31f4",
                borderRadius: 10,
                marginTop: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>
                Login
              </Text>
            </TouchableOpacity>
    
            <Text style={{color:"grey", gap:10}}>If doesn't an account then craete account</Text>
    
            {/* Create Account Button */}
            <TouchableOpacity
               onPress={()=> navigation.navigate("JobSeekerLogin")}
              style={{
                width: "50%",
                height: 50,
                backgroundColor:"#5a31f4",
                borderRadius: 10,
                marginTop: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>
                Create Account
              </Text>
            </TouchableOpacity>
    
          </View>
        </ScrollView>
  )
}

export default SignUpEmp

