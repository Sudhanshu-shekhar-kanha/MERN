// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
//import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional






// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCe8P5GQIdxMYfHOqM0pQvaP0o_f2y4Uc0",
//   authDomain: "double-aleph-312509.firebaseapp.com",
//   projectId: "double-aleph-312509",
//   storageBucket: "double-aleph-312509.appspot.com",
//   messagingSenderId: "576753850807",
//   appId: "1:576753850807:web:99456a5c6fd5e8348e3032"
// };



// // Initialize Firebase
// const app = initializeApp(firebaseConfig);









// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Cn-17zHkTTlSFyGNvBWHa1do7dy8OiQ",
  authDomain: "blogging-app-fc142.firebaseapp.com",
  projectId: "blogging-app-fc142",
  storageBucket: "blogging-app-fc142.appspot.com",
  messagingSenderId: "377623254434",
  appId: "1:377623254434:web:f4759731a8523d472acefb",
  measurementId: "G-4E1KL1HTY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);