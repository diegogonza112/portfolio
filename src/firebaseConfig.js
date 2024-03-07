// src/firebaseConfig.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAxz1afaWdK1gRPyz8Uy6xdsMo0DSY-z0c",
    authDomain: "diegoportfolio-14121.firebaseapp.com",
    projectId: "diegoportfolio-14121",
    storageBucket: "diegoportfolio-14121.appspot.com",
    messagingSenderId: "1032693231118",
    appId: "1:1032693231118:web:6326022acf55215b2b565f",
    measurementId: "G-VBN13X14JV"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
export const db = firebase.firestore();
