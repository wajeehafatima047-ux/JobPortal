// import React from "react";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import 'react-native-gesture-handler';

// // Import pages
// // import Home from "./pages/Home";
// import CreateAccountCompany from "./pages/CreateAccountCompany";
// // import Signup from "./pages/SignUp";
// import BottomTab from './Tabs/BottomTab';
// import Profile from './pages/Profile';
// import RoleSelectScreen from "./pages/RoleSelectScreen";
// import JobSeekerLogin from "./pages/JobSeekerLogin";
// import CompanyLogin from "./pages/CompanyLogin";

// import { Provider, useSelector } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';


// import { SafeAreaView } from 'react-native';
// import { persistor, store } from './redux/store';



// const Stack = createNativeStackNavigator();
       


// function RenderStack() {
//   const user = useSelector((state) => state.home.user);

//   if (!user?.uid) {
//     return (
//       <Stack.Navigator initialRouteName="RoleSelectScreen">
      


//           <Stack.Screen options={{headerShown:false}} name="RoleSelectScreen" component={RoleSelectScreen} /> 


            
       

//           <Stack.Screen  name="JobSeekerLogin" component={JobSeekerLogin} />

//         <Stack.Screen  name="CompanyLogin" component={CompanyLogin} />


//         <Stack.Screen name="CreateAccountCompany" component={CreateAccountCompany} />




//       </Stack.Navigator> 
//     );
//   }

//   return (

//  <Stack.Navigator initialRouteName="BottomTab">

// <Stack.Screen   name="BottomTab" component={BottomTab}/>

//  </Stack.Navigator>

//   )

 
// }

// const App = () => {
//   return (
//     <SafeAreaView style={{ paddingTop: 50, flex: 1, backgroundColor: '#fff' }}>
      
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <RenderStack />
//         </PersistGate>
//       </Provider>

//     </SafeAreaView>
//   );
// };



//  export default  App; 

   


       
        

        
         

// //          <Stack.Screen 
// //           name="RoleSelectScreen" 
// //           component={RoleSelectScreen} 
// //         />

// //           <Stack.Screen 
// //           name="JobSeekerLogin" 
// //           component={JobSeekerLogin} 
// //         />

// //            <Stack.Screen 
// //           name="CompanyLogin" 
// //           component={CompanyLogin} 
// //         /> 

// //          <Stack.Screen 
// //           name="CreateAccountCompany" 
// //           component={CreateAccountCompany} 
// //         /> 

// //          <Stack.Screen  
// //       name="BottomTab" 
// //       component={BottomTab}/>

// //           {/* <Stack.Screen 
// //           name="Home" 
// //           component={Home} 
// //         /> 

// //          <Stack.Screen 
// //           name="Profile" 
// //           component={Profile} 
// //         /> 
// //         */}

  

      
  
// //   );

  
// // }



          // new screen not working
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
//  import Home from "./pages/Home";

//   import RoleSelectScreen from "./pages/RoleSelectScreen";
//  import JobSeekerLogin from "./pages/JobSeekerLogin";
//  import CompanyLogin from "./pages/CompanyLogin";

//   import CreateAccountCompany from "./pages/CreateAccountCompany";
 

//  import Profile from "./pages/Profile";
//  import BottomTab from "./Tabs/BottomTab";

//  import { persistor, store, RenderStack } from "./redux/store";

//  import { SafeAreaView } from "react-native";
// import { Provider, useSelector } from "react-redux";
//  import { PersistGate } from "redux-persist/integration/react";

//  const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
    
//        <PersistGate loading={null} persistor={persistor}>
//          <Provider store={store}>
//            <RenderStack />
//         </Provider>

//      <Stack.Navigator initialRouteName="RoleSelectScreen">
//            <Stack.Screen name="RoleSelectScreen" component={RoleSelectScreen} />
           
//            <Stack.Screen name="JobSeekerLogin" component={JobSeekerLogin} />
//            <Stack.Screen name="CompanyLogin" component={CompanyLogin} />
    
//     <Stack.Screen name="CreateAccountCompany" component={CreateAccountCompany} />

//               <Stack.Screen name="Home" component={Home} />
//            <Stack.Screen name="Profile" component={Profile} />
     

//           <Stack.Screen name="BottomTab" component={BottomTab} />

           
//         </Stack.Navigator>
//        </PersistGate>
   
//    );
//  }




import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import HomeEmp from "./pages/HomeEmp";
import SignUpEmp from "./pages/SignUpEmp";

import RoleSelectScreen from "./pages/RoleSelectScreen";
import JobSeekerLogin from "./pages/JobSeekerLogin";
import CompanyLogin from "./pages/CompanyLogin";
import CreateAccountCompany from "./pages/CreateAccountCompany";
import Profile from "./pages/Profile";
import ProfileEmp from "./pages/ProfileEmp";
import BottomTab from "./Tabs/BottomTab";
import BottomTabEmp from "./Tabs/BottomTabEmp";
import Message from './pages/Message';
import MessageEmp from './pages/MessageEmp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="RoleSelectScreen">

                            {/* Company screen */}

      <Stack.Screen name="RoleSelectScreen" component={RoleSelectScreen} />

       
       <Stack.Screen name="CompanyLogin" component={CompanyLogin} /> 

      <Stack.Screen name="CreateAccountCompany" component={CreateAccountCompany} />

            <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Message" component={Message}/>
         <Stack.Screen name="Profile" component={Profile} />

                 {/* employee screen */}
<Stack.Screen name="JobSeekerLogin" component={JobSeekerLogin} /> 
  <Stack.Screen name="SignUpEmp" component={SignUpEmp} />

      <Stack.Screen name="BottomTabEmp" component={BottomTabEmp} />
      <Stack.Screen name="HomeEmp" component={HomeEmp} />
       <Stack.Screen name="MessageEmp" component={MessageEmp}/>
         <Stack.Screen name="ProfileEmp" component={ProfileEmp} />

   
        

    </Stack.Navigator>
  );
}