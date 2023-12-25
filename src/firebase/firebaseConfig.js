import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyClEzb-GB9FAsoI41KpekQQ6b390mNxr2Y",
  authDomain: "mykitchen-93626.firebaseapp.com",
  projectId: "mykitchen-93626",
  storageBucket: "mykitchen-93626.appspot.com",
  messagingSenderId: "929785394136",
  appId: "1:929785394136:web:74ff9d3ef735b954d7b8ad",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
