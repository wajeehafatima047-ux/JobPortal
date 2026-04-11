import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const interview = () => {
  return (
    <ScrollView style={{ height: "100%" }}>
      <View
        style={{ flex: 1, backgroundColor: "#f3f0f8", margin: 10, padding: 10 }}
      >
        <Text
          style={{
            flex: 1,
            fontWeight: "bold",
            height: "300%",
            weight: "100%",
            backgroundColor: "#5a31f4",
            color: "white",
          }}
        >
          Apply successfully
        </Text>
        <Text style={{ backgroundColor: "#5a31f4", color: "white" }}>
          You has apply an job in Queenify Group as UI Design{" "}
        </Text>
        <Text
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#5a31f4",
            color: "grey",
          }}
        >
          10h ago
        </Text>
        <Text
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#5a31f4",
            color: "white",
          }}
        >
          Mark as read{" "}
        </Text>

        <Text
          style={{
            fontWeight: "bold",
            height: "300%",
            weight: "100%",
            backgroundColor: "#f3f0f8",
            color: "black",
          }}
        >
          Complete your profile
        </Text>
        <Text style={{ backgroundColor: "", color: "grey" }}>
          Please verify your profile information to continues using this
          app{" "}
        </Text>
        <Text
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "",
            color: "grey",
          }}
        >
          4 june
        </Text>

        <Text
          style={{
            fontWeight: "bold",
            height: "300%",
            weight: "100%",
            backgroundColor: "",
            color: "black",
          }}
        >
          Apply successfully
        </Text>
        <Text style={{ backgroundColor: "", color: "grey" }}>
          You has apply an job in Queenify Group as UI Design{" "}
        </Text>
        <Text
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "",
            color: "grey",
          }}
        >
          10h ago
        </Text>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              height: "300%",
              weight: "100%",
              backgroundColor: "",
              color: "black",
            }}
          >
            Interview Calls
          </Text>
          <Text style={{ backgroundColor: "", color: "grey" }}>
            Congratulation ! you have interview calls tomorror.check schedule
            here...{" "}
          </Text>
          <Text
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "",
              color: "grey",
            }}
          >
            4m ago
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default interview;

const styles = StyleSheet.create({});
