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

// export default function MessageEmp() {
  
//     const [message, setMessage] = useState("");
   
//      const [messages, setMessages] = useState([
//        { id: "1", text: "Hello, I saw your application.", sender: "company" },
//        { id: "2", text: "Thank you! I am interested.", sender: "employee" }
//      ]);
   
//      const sendMessage = () => {
//        if (message.trim() === "") return;
   
//        const newMessage = {
//          id: Date.now().toString(),
//          text: message,
//          sender: "employee"
//        };
   
//        setMessages([...messages, newMessage]);
//        setMessage("");
//      };
   
//      const renderItem = ({ item }) => {
//        const isEmployee = item.sender === "employee";
   
//        return (
//          <View
//            style={[
//              styles.messageContainer,
//              isEmployee ? styles.employeeMessage : styles.companyMessage
//            ]}
//          >
//            <Text style={styles.messageText}>{item.text}</Text>
//          </View>
//        );
//      };
   
//      return (
   
//        <KeyboardAvoidingView
//          style={{ flex: 1 }}
//          behavior={Platform.OS === "ios" ? "padding" : undefined}
//        >
   
//          <View style={styles.container}>
   
//            <FlatList
//              data={messages}
//              keyExtractor={(item) => item.id}
//              renderItem={renderItem}
//            />
   
//            <View style={styles.inputContainer}>
   
//              <TextInput
//                style={styles.input}
//                placeholder="Type a message..."
//                value={message}
//                onChangeText={setMessage}
//              />
   
//              <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//                <Text style={{ color: "#fff" }}>Send</Text>
//              </TouchableOpacity>
   
//            </View>
   
//          </View>
   
//        </KeyboardAvoidingView>
//      );
//    }
   
//    const styles = StyleSheet.create({
   
//      container: {
//        flex: 1,
//        padding: 10,
//        backgroundColor: "#f5f5f5"
//      },
   
//      messageContainer: {
//        padding: 12,
//        borderRadius: 10,
//        marginVertical: 5,
//        maxWidth: "75%"
//      },
   
//      employeeMessage: {
//        alignSelf: "flex-end",
//        backgroundColor: "#007bff"
//      },
   
//      companyMessage: {
//        alignSelf: "flex-start",
//        backgroundColor: "#e0e0e0"
//      },
   
//      messageText: {
//        color: "#000"
//      },
   
//      inputContainer: {
//        flexDirection: "row",
//        alignItems: "center",
//        borderTopWidth: 1,
//        borderColor: "#ddd",
//        padding: 5
//      },
   
//      input: {
//        flex: 1,
//        padding: 10,
//        backgroundColor: "#fff",
//        borderRadius: 8
//      },
   
//      sendButton: {
//        backgroundColor: "#007bff",
//        padding: 12,
//        marginLeft: 5,
//        borderRadius: 8
//      }
   
//    });


import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";

export default function MessageEmp() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    { id: "1", text: "Hello, I saw your application.", sender: "company" },
    { id: "2", text: "Thank you! I am interested.", sender: "employee" }
  ]);

  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = {
      id: Date.now().toString(),
      text: message,
      sender: "employee"
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    // scroll to bottom after sending
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const renderItem = ({ item }) => {
    const isEmployee = item.sender === "employee";

    return (
      <View
        style={[
          styles.messageContainer,
          isEmployee ? styles.employeeMessage : styles.companyMessage
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            keyboardShouldPersistTaps="handled"
          />

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              value={message}
              onChangeText={setMessage}
            />

            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Text style={{ color: "#fff" }}>Send</Text>
            </TouchableOpacity>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5"
  },

  messageContainer: {
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: "75%"
  },

  employeeMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#007bff"
  },

  companyMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e0e0e0"
  },

  messageText: {
    color: "#000"
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    padding: 5
  },

  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8
  },

  sendButton: {
    backgroundColor: "#007bff",
    padding: 12,
    marginLeft: 5,
    borderRadius: 8
  }
});