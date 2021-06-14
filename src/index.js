import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'



// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDFuGG1kSqUgmNeIYOHxzwokpZoCWwaooc",
    authDomain: "chat-react-test-e535c.firebaseapp.com",
    projectId: "chat-react-test-e535c",
    storageBucket: "chat-react-test-e535c.appspot.com",
    messagingSenderId: "490175842437",
    appId: "1:490175842437:web:7b457a166c5ed76a2e41ec",
    measurementId: "G-DHHY2NCKT9"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
      firebase,
      auth,
      firestore
  }}>
      <App />
  </Context.Provider>,
  document.getElementById('root')
);
