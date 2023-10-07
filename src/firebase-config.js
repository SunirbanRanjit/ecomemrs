// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import "firebase/firestore"
import {get, getDatabase, ref, set} from "firebase/database"
import { Timestamp } from "firebase/firestore";

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
//////////////////////////////////////////////////////////
export async function updateContact(type,value) {
  const dbRef = ref(database, `adminDB/${type}`);
  try{
    await set(dbRef , {value});
  }
catch(error){
  console.log(error);
}
}
/////////////////////////////////////////////////////////
export async function getPrice(){
  const price = ref(database, `adminDB/Price`);
 let priceData ;
  try{
    await get(price).then((data) => {
      if(data.exists){
        priceData = data.val();
      }
  })
  }catch(error){
    console.log(error);
  }
  return priceData;
}
//////////////////////////////////////////////////////////
export async function setPrice(type,nameStudent,nameClassic,namePremium){
  const price = ref(database, `adminDB/Price/${type}`);

  try{
    await set(price,{student:nameStudent,classic:nameClassic,premium:namePremium});
  }catch(error){
    console.log(error);
  }
}
///////////////////////////////////////////////////////
export async function verifyAdmin(uid){
  const admin = ref(database, `adminDB/${uid}`);
  let ret = true;
  try{
    await get(admin).then((data)=>{
      console.log(data.val());
      if(data.val()===null){
        ret = false;
      }
      if(data.exists){
        return true;
      }
    })
  }catch(error){
    return false;
  }
  return ret;
}
//////////////////////////////////////////////////
export async function getContact(){
  const phnRef = ref(database,`adminDB/phone`);
  const whatsRef = ref(database,`adminDB/whatsapp`);
  const fbRef = ref(database,`adminDB/fbPage`);
  let phone,whatsapp,fbPage;
  try{
    await get(phnRef  ).then((data) => {
      if(data.exists){
        phone = data.val();
      }
  })

  await get(whatsRef  ).then((data) => {
    if(data.exists){
      whatsapp = data.val();
    }
})

await get(fbRef  ).then((data) => {
  if(data.exists){
    fbPage = data.val();
  }
})
}catch(error){
  console.log(error);
 

}
return {phone,whatsapp,fbPage};
}
///////////////////////////////////////////////////////
export async function newAcc(uid) {
  const dbRef = ref(database, `userDB/${uid}`);
  let ret;
  try{
    //console.log("accessing uid " + uid);
    await get(dbRef  ).then((data) => {
      if(data.exists){
        console.log(data.val());

         ret = false;  
         if(data.val() === null)
         ret = true;
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
////////////////////////////////////////////////////
export async function getMenu(){
  const dbRef = ref(database,'adminDB/menu/menu');
  var Info;
  try {
    await get(dbRef).then((data) => {
      Info = data.val();
      console.log(Info);
    })
  } catch (error) {
    
  }
  return Info;
}
export async function getUserDocument(uid) {
  const dbRef = ref(database, `userDB/${uid}`);
  let Info;
  let exists = false;
  let ret = {
    name:"",
    phone:0,
    address:"",
    plan:2,
  }
  try{
    //console.log("accessing uid " + uid);
    await get(dbRef  ).then((data) => {
      if(data.exists){
        
        Info = data.val();
        //console.log(data.val());
        exists = true;
      }else{
        console.log("no data");
        alert("Oops! please login");
        exists = false;
      }
    }).catch((error) => {
      console.log(error);
      exists = false;
    })
  }catch(error){
    console.log(error);
    exists = false;
  }
  return Info;
}
///////////////////////////////////////////////////////////////////
export const createUserDocument = async (user, name, address, phone,plan) => {
  try{
    var timeStamp = new Date();
    const date = "";
  await set(ref(database, 'userDB/' + user), {
    name,
    phone,
    address,
    date
  });
  }catch(error){
    console.log(error);
  }
}
////////////////////////////////////////////////////////////////
export const userSavePlan = async (user, name, address, phone,plan,price) => {
  try{
    var timeStamp = new Date();
    const date = "";
  await set(ref(database, 'userDB/' + user), {
    name,
    phone,
    address,
    plan,
    price,
    date,
  });
  }catch(error){
    console.log(error);
  }
}
///////////////////////////////////////////////////////////////
export const updateMenu = async (menu) => {
  try {
    await set(ref(database,'adminDB/menu'),{
      menu
    })
  } catch (error) {
    
  }
}
//////////////////////////////////////////////////////////////////

export const userUpdatePlan = async (user, name, address, phone,plan,price,date) => {
  try{
    
  await set(ref(database, 'userDB/' + user), {
    name,
    phone,
    address,
    plan,
    price,
    date,
  });
  }catch(error){
    console.log(error);
  }
}
///////////////////////////////////////////////////////////////
export const userVerifyPlan = async (user, name, address, phone,plan,price) => {
  try{
    var timeStamp = new Date();
    timeStamp.setDate(timeStamp.getDate() + 28);
    const date = timeStamp.toLocaleDateString();
  await set(ref(database, 'userDB/' + user), {
    name,
    phone,
    address,
    plan,
    price,
    date,
  });
  }catch(error){
    console.log(error);
  }
}
///////////////////////////////////////////////////////////////
export async function getAll(uid){
  const dbRef = ref(database, `adminDB/${uid}`);

  const userdbRef = ref(database, `userDB`);
  let Admin;
  let Info;
  let exists = false;

  try{
    //console.log("accessing uid " + uid);
    await get(dbRef  ).then((data) => {
      if(data.exists){
        
        Admin = data.val();
        if(Admin === null){
          return null;
        }
        
      }else{
        console.log("no data");
        alert("Oops! please login");
        exists = false;
      }
    }).catch((error) => {
      console.log(error);
      exists = false;
    })
  }catch(error){
    console.log(error);
    exists = false;
  }

  try{
    await get(userdbRef).then((list) => {
      if(list.exists){
        Info = list.val();
      }
    }).catch((error) => {
      console.log(error);
    })
  }catch(error){
    console.log(error);
  }
  return Admin===null?"":Info;
}

