import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentic = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthentic;