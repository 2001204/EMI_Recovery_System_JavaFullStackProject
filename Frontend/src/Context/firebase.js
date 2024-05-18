import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCEbusIHdtl9ZYjgSkdTa_7F5HDPsjiJis",
    authDomain: "phone-auth-97cc9.firebaseapp.com",
    projectId: "phone-auth-97cc9",
    storageBucket: "phone-auth-97cc9.appspot.com",
    messagingSenderId: "988573913428",
    appId: "1:988573913428:web:6c8ee7b29e656fb4ff38c1"
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
