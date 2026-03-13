

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeEmp from "../pages/HomeEmp";
import AntDesign from "@expo/vector-icons/AntDesign";
import ProfileEmp from "../pages/ProfileEmp";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import MessageEmp from "../pages/MessageEmp";
// import AntDesign from '@expo/vector-icons/AntDesign';

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
            <AntDesign name="message" size={24} color="black" />
          ),
        }}
        name="Message"
        component={MessageEmp}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
         <MaterialIcons name="account-circle" size={24} color="black" />
          ),
        }}
        name="Account"
        component={ProfileEmp}
      />
    </Tab.Navigator>
  );
}

  

