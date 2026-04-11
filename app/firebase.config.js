













// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCn2DItxRES7zcfK_DGOnl2qQo-waO2res",
//   authDomain: "jobportalapp-73c32.firebaseapp.com",
//   projectId: "jobportalapp-73c32",
//   storageBucket: "jobportalapp-73c32.firebasestorage.app",
//   messagingSenderId: "471692391474",
//   appId: "1:471692391474:web:5b4f5985d126ac52b4f82b",
//   measurementId: "G-DC0CH12VE0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//  export const auth=getAuth(app)




 
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn2DItxRES7zcfK_DGOnl2qQo-waO2res",
  authDomain: "jobportalapp-73c32.firebaseapp.com",
  projectId: "jobportalapp-73c32",
  storageBucket: "jobportalapp-73c32.firebasestorage.app",
  messagingSenderId: "471692391474",
  appId: "1:471692391474:web:5b4f5985d126ac52b4f82b",
  measurementId: "G-DC0CH12VE0"
};

const app = initializeApp(firebaseConfig);

// ✅ FIX: Different setup for Web vs React Native
let auth;

if (Platform.OS === "web") {
  // Web uses normal auth
  auth = getAuth(app);
} else {
  // React Native uses AsyncStorage
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { auth };