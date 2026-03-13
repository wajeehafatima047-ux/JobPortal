

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeEmp from "../pages/HomeEmp";
import AntDesign from "@expo/vector-icons/AntDesign";
import ProfileEmp from "../pages/ProfileEmp";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MessageEmp from "../pages/MessageEmp";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function BottomTabEmp() {
  return (
   <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
        name="Home"
        component={HomeEmp}
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
        component={MessageEmp}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="person" size={24} color={color} />
          ),
        }}
        name="Account"
        component={ProfileEmp}
      />
    </Tab.Navigator>
  );
}

  

