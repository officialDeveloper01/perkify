// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCVNmJog-IEeDlfq_wbA0u9G3NgiwPgt4s",
    authDomain: "perkify-c371c.firebaseapp.com",
    databaseURL: "https://perkify-c371c-default-rtdb.firebaseio.com",
    projectId: "perkify-c371c",
    storageBucket: "perkify-c371c.firebasestorage.app",
    messagingSenderId: "740685418765",
    appId: "1:740685418765:web:76c3c80a36214deecc2044",
    measurementId: "G-MZH13KP8N8"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
