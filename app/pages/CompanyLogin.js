


import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

const CompanyLogin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogIn = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill all fields");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Check email verification
      if (!user.emailVerified) {
        alert("Please verify your email first 📩");
        return;
      }

      alert("Login successful ✅");

      navigation.navigate("BottomTabEmp");

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
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Login
        </Text>

        <Text style={{ color: "grey" }}>
          Please login to your account
        </Text>

        {/* Email */}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        {/* Password */}
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        {/* Error */}
        {errorMessage ? (
          <Text style={{ color: "red", marginTop: 10 }}>
            {errorMessage}
          </Text>
        ) : null}

        {/* Login Button */}
        <TouchableOpacity onPress={handleLogIn} style={styles.button}>
          <Text style={{ fontSize: 18, color: "white" }}>
            Login
          </Text>
        </TouchableOpacity>

        <Text style={{ color: "grey", marginTop: 20 }}>
          Don't have an account?
        </Text>

        {/* Go to Signup */}
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateAccountCompany")}
        >
          <Text style={{ color: "#5a31f4", marginTop: 10 }}>
            Create Account
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

export default CompanyLogin;


// new code


// import React, { useState } from "react";
// import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase.config";

// const CompanyLogin = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleLogIn = async () => {
//     if (!email || !password) {
//       setErrorMessage("Please fill all fields");
//       return;
//     }

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // ✅ Check email verification
//       if (!user.emailVerified) {
//         alert("Please verify your email first 📩");
//         return;
//       }

//       alert("Login successful ✅");

//       navigation.navigate("BottomTabEmp");

//     } catch (error) {
//       setErrorMessage(error.message);
//     }
//   };

//   return (
//     <ScrollView style={{ height: "100%" }}>
//       <View
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "#f3f0f8",
//           paddingTop: 80,
//         }}
//       >
//         <Text style={{ fontSize: 24, fontWeight: "bold" }}>
//           Login
//         </Text>

//         <Text style={{ color: "grey" }}>
//           Please login to your account
//         </Text>

//         {/* Email */}
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           style={styles.input}
//         />

//         {/* Password */}
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           style={styles.input}
//         />

//         {/* Error */}
//         {errorMessage ? (
//           <Text style={{ color: "red", marginTop: 10 }}>
//             {errorMessage}
//           </Text>
//         ) : null}

//         {/* Login Button */}
//         <TouchableOpacity onPress={handleLogIn} style={styles.button}>
//           <Text style={{ fontSize: 18, color: "white" }}>
//             Login
//           </Text>
//         </TouchableOpacity>

//         <Text style={{ color: "grey", marginTop: 20 }}>
//           Don't have an account?
//         </Text>

//         {/* Go to Signup */}
//         <TouchableOpacity
//           onPress={() => navigation.navigate("CreateAccountCompany")}
//         >
//           <Text style={{ color: "#5a31f4", marginTop: 10 }}>
//             Create Account
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = {
//   input: {
//     borderWidth: 1,
//     width: "80%",
//     height: 50,
//     borderRadius: 10,
//     marginTop: 20,
//     backgroundColor: "white",
//     paddingLeft: 10,
//   },

//   button: {
//     width: "50%",
//     height: 50,
//     backgroundColor: "#5a31f4",
//     borderRadius: 10,
//     marginTop: 40,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// };

// export default CompanyLogin;
