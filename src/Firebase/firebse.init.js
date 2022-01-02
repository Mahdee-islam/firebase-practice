import firebaseConfig from "./firebase.conifig";
import { initializeApp } from 'firebase/app';

const initialization = () => {
    initializeApp(firebaseConfig);
}

export default initialization; 