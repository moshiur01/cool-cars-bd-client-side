import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfiq";

const firebaseAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default firebaseAuthentication;
