import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA7-bptqJUTV2AieILuFccep2OaR3GS8_k",
    authDomain: "pinkys-showroom.firebaseapp.com",
    projectId: "pinkys-showroom",
    storageBucket: "pinkys-showroom.appspot.com",
    messagingSenderId: "222979829491",
    appId: "1:222979829491:web:9337dc6ee121d4ab32d186"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)