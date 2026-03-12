import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import AntDesign from "@expo/vector-icons/AntDesign";
import Profile from "../pages/Profile";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Message from "../pages/Message";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="message-text-outline"
              size={24}
              color="black"
            />
          ),
        }}
        name="Message"
        component={Message}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="person" size={24} color={color} />
          ),
        }}
        name="Account"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
