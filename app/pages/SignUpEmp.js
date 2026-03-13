import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import React from 'react'

const SignUpEmp = ({navigation}) => {
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
    
    
                     {/* LogiN Button  */}
             <TouchableOpacity
               onPress={()=>{navigation.navigate("BottomTabEmp")}}
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

