
import React from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const CompanyLogin = ({navigation}) => {



  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Login
        </Text>

        <Text style={{ color: "grey" }}>
          Please Login to your registered account
        </Text>

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
            backgroundColor: "blue",
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
           onPress={()=> navigation.navigate("CreateAccountCompany")}
          style={{
            width: "50%",
            height: 50,
            backgroundColor: "blue",
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
  );
};

export default CompanyLogin;

