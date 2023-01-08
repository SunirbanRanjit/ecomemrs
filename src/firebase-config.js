// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import "firebase/firestore"
import {get, getDatabase, ref, set} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCO_K6uBS6aVu3f53W1evGWnuk-yrefi0o",
  authDomain: "test-2451f.firebaseapp.com",
  projectId: "test-2451f",
  storageBucket: "test-2451f.appspot.com",
  messagingSenderId: "187283801046",
  appId: "1:187283801046:web:7e4c3b0d0abf613f205a77",
  databaseURL: "https://test-2451f-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
const database = getDatabase(app);

export async function newAcc(uid) {
  const dbRef = ref(database, `userDB/${uid}`);
  let ret;
  try{
    //console.log("accessing uid " + uid);
    await get(dbRef  ).then((data) => {
      if(data.exists){
        console.log(data.val());
         ret = false;  
      }else{
         ret = true;
        
      }
      
    }).catch((error) => {
      console.log(error);
      
    })
  }catch(error){
    console.log(error);
    return true;

  }
  console.log(ret);
  return ret;
}

export async function getUserDocument(uid) {
  const dbRef = ref(database, `userDB/${uid}`);
  let Info;
  try{
    //console.log("accessing uid " + uid);
    await get(dbRef  ).then((data) => {
      if(data.exists){
        Info = data.val();
      }else{
        console.log("no data");

      }
    }).catch((error) => {
      console.log(error);
    })
  }catch(error){
    console.log(error);
  }
  return Info;
}

export const createUserDocument = async (user, name, address, phone,plan) => {
  try{
  await set(ref(database, 'userDB/' + user), {
    name,
    phone,
    address,
    timeStamp: new Date(),
    plan,
  });
  }catch(error){
    console.log(error);
  }
  
   
}

