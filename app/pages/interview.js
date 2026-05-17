// 

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const notifications = [
  {
    id: 1,
    title: "Application Submitted",
    description:
      "You successfully applied for the UI Designer role at Queenify Group.",
    time: "10h ago",
    type: "success",
    unread: true,
  },
  {
    id: 2,
    title: "Complete Your Profile",
    description:
      "Please verify your profile information to continue using the app.",
    time: "4 June",
    type: "profile",
    unread: false,
  },
  {
    id: 3,
    title: "Interview Invitation",
    description:
      "Congratulations! You have an interview scheduled for tomorrow. Check your schedule now.",
    time: "4m ago",
    type: "interview",
    unread: true,
  },
];

const Interview = () => {
  const renderIcon = (type) => {
    switch (type) {
      case "success":
        return (
          <View style={[styles.iconBox, { backgroundColor: "#E8F9F0" }]}>
            <Ionicons name="checkmark-circle" size={24} color="#22C55E" />
          </View>
        );

      case "profile":
        return (
          <View style={[styles.iconBox, { backgroundColor: "#EEF2FF" }]}>
            <Ionicons name="person-circle" size={24} color="#5A31F4" />
          </View>
        );

      case "interview":
        return (
          <View style={[styles.iconBox, { backgroundColor: "#FFF4E5" }]}>
            <Ionicons name="briefcase" size={24} color="#F59E0B" />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Ionicons
            name="notifications-outline"
            size={26}
            color="#111827"
          />
        </TouchableOpacity>
      </View>

      {/* Notifications */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {notifications.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            style={[
              styles.card,
              item.unread && styles.unreadCard,
            ]}
          >
            {/* Left Icon */}
            {renderIcon(item.type)}

            {/* Content */}
            <View style={styles.content}>
              <View style={styles.topRow}>
                <Text style={styles.title}>{item.title}</Text>

                {item.unread && <View style={styles.dot} />}
              </View>

              <Text style={styles.description}>
                {item.description}
              </Text>

              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Interview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4.65,

    elevation: 5,
  },

  unreadCard: {
    borderLeftWidth: 5,
    borderLeftColor: "#5A31F4",
  },

  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  content: {
    flex: 1,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    flex: 1,
  },

  description: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 6,
    lineHeight: 22,
  },

  time: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 10,
    fontWeight: "500",
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#5A31F4",
    marginLeft: 8,
  },
});