import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';

import Profile from '../pages/Profile';

import AntDesign from "@expo/vector-icons/AntDesign";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
const Tab = createBottomTabNavigator();

export default function BottomTab() {

    return(

       
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen options={{ tabBarIcon: ({ color }) =>  <AntDesign name="home" size={24} color={color} /> }} name="Home" component={Home} />


              <Tab.Screen options={{ tabBarIcon: ({ color }) =>  <FontAwesome6 name="person" size={24} color={color} /> }} name="Profile" component={Profile} />

             

    


        </Tab.Navigator> 
    )
}


