



// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform
// } from "react-native";

// export default function Messages() {

//   const [message, setMessage] = useState("");

//   const [messages, setMessages] = useState([
//     { id: "1", text: "Hello, I saw your application.", sender: "company" },
//     { id: "2", text: "Thank you! I am interested.", sender: "employee" }
//   ]);

//   const sendMessage = () => {
//     if (message.trim() === "") return;

//     const newMessage = {
//       id: Date.now().toString(),
//       text: message,
//       sender: "employee"
//     };

//     setMessages([...messages, newMessage]);
//     setMessage("");
//   };

//   const renderItem = ({ item }) => {
//     const isEmployee = item.sender === "employee";

//     return (
//       <View
//         style={[
//           styles.messageContainer,
//           isEmployee ? styles.employeeMessage : styles.companyMessage
//         ]}
//       >
//         <Text style={styles.messageText}>{item.text}</Text>
//       </View>
//     );
//   };

//   return (

//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//     >

//       <View style={styles.container}>

//         <FlatList
//           data={messages}
//           keyExtractor={(item) => item.id}
//           renderItem={renderItem}
//         />

//         <View style={styles.inputContainer}>

//           <TextInput
//             style={styles.input}
//             placeholder="Type a message..."
//             value={message}
//             onChangeText={setMessage}
//           />

//           <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//             <Text style={{ color: "#fff" }}>Send</Text>
//           </TouchableOpacity>

//         </View>

//       </View>

//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#f5f5f5"
//   },

//   messageContainer: {
//     padding: 12,
//     borderRadius: 10,
//     marginVertical: 5,
//     maxWidth: "75%"
//   },

//   employeeMessage: {
//     alignSelf: "flex-end",
//     backgroundColor: "#007bff"
//   },

//   companyMessage: {
//     alignSelf: "flex-start",
//     backgroundColor: "#e0e0e0"
//   },

//   messageText: {
//     color: "#000"
//   },

//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderTopWidth: 1,
//     borderColor: "#ddd",
//     padding: 5
//   },

//   input: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#fff",
//     borderRadius: 8
//   },

//   sendButton: {
//     backgroundColor: "#007bff",
//     padding: 12,
//     marginLeft: 5,
//     borderRadius: 8
//   }

// });



import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const data = [
  {
    id: "1",
    name: "Gustauv Semalam",
    message: "Roger that sir, thankyou",
    time: "2m ago",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Claudia Surrr",
    message: "OK. Lorem ipsum dolor sect...",
    time: "2m ago",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "3",
    name: "Rose Melati",
    message: "Lorem ipsum dolor",
    time: "2m ago",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: "4",
    name: "Olivia James",
    message: "OK. Lorem ipsum dolor sect...",
    time: "2m ago",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

export default function MessagesScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Chat", { user: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>

      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>

      <TextInput
        placeholder="Search message..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#f3f0f8" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },

  search: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  name: { fontWeight: "bold" },
  message: { color: "gray" },
  time: { color: "gray", fontSize: 12 },
});