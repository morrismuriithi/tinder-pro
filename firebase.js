import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAsLbSTddODVL1cxNoSoLBAkBs1VVgo3kg",
  authDomain: "instagram-pro-7a15a.firebaseapp.com",
  projectId: "instagram-pro-7a15a",
  storageBucket: "instagram-pro-7a15a.appspot.com",
  messagingSenderId: "386425951219",
  appId: "1:386425951219:web:819b88b0e7323aa794f886"
};
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

