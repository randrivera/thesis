 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
 import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 import {
  player
} from "./script.js";

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAaomt0YCnQ2b67QihmeI9-JlQuXzEVU7I",
   authDomain: "ai-faces.firebaseapp.com",
   projectId: "ai-faces",
   storageBucket: "ai-faces.appspot.com",
   messagingSenderId: "338300608687",
   appId: "1:338300608687:web:2f3209570f4bb0d91d745a",
   measurementId: "G-7FBSYZXNKT"
 };
 

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const analytics = getAnalytics(app);
 const db = getDatabase();
 const reference = ref(db, 'scores');

 function writeUserData(name, imageURL){
  push(reference, {
    username: name,
    profile_picture: imageURL
  }, { merge: true })

  updateGallery()
}

writeUserData(player.name, player.imageURL);
console.log("completed save.js")


function updateGallery(){
  console.log("Update Gallery succesful")
}

// function gotData(data){
//   console.log(data);
// }

// function errData(err){
//   console.log("Error!");
//   console.log(err)

// }

 