import React from 'react';
import ChatApp from './src/ChatApp';

// Your web app's Firebase configuration

// Initialize Firebase

// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import { SafeAreaView } from 'react-native';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6XWKoUz3QHhMdpwzvABRpNliJmyOb47c",
  authDomain: "demofirebase-aa7f6.firebaseapp.com",
  databaseURL: "https://demofirebase-aa7f6-default-rtdb.firebaseio.com",
  projectId: "demofirebase-aa7f6",
  storageBucket: "demofirebase-aa7f6.appspot.com",
  messagingSenderId: "298788872378",
  appId: "1:298788872378:web:35cdd686cfff86ab1ae283",
  measurementId: "G-1R5TF7C943"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const App = () => {
  return(
    // <SafeAreaView>
  <ChatApp />
    // </SafeAreaView>
  ) 
  
};

export default App;
