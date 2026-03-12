
import React from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const CreateAccountCompany = ({navigation}) => {



  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#f3f0f8", }}>

        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Create an Account
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
           onPress={()=>{navigation.navigate("BottomTab")}}
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
            SignUp
          </Text>
        </TouchableOpacity>

        <Text style={{color:"grey", gap:10}}>Already Have an account ?</Text>

        {/* Create Account Button */}
        <TouchableOpacity
           onPress={()=> navigation.navigate("CompanyLogin")}
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
            Login
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default CreateAccountCompany



