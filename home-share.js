// alert("Login successfully!!");
const firebaseConfig = {
    apiKey: "AIzaSyCLKot3bMALGPMeyd3fMbRbFnoLic_bhR0",
    authDomain: "poll-290f8.firebaseapp.com",
    databaseURL: "https://poll-290f8-default-rtdb.firebaseio.com",
    projectId: "poll-290f8",
    storageBucket: "poll-290f8.appspot.com",
    messagingSenderId: "226225965293",
    appId: "1:226225965293:web:de8359eb589610f993a4e4",
    measurementId: "G-XQ0KWBVMY8"
  };


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
firebase.initializeApp(firebaseConfig);
firebase.analytics();

     function submit()
     {

        firebase.database().ref("Polls").push().set({
            Title: document.getElementById("title").value,
            Option1 : document.getElementById("option1").value,
            Option2 : document.getElementById("option2").value,
            Option3 : document.getElementById("option3").value,
            Option4 : document.getElementById("option4").value
      })
      .then ( ( ) =>
      alert("Poll Created"),
      window.location.replace('share.html'),
     
)}
      
//    fetch data from firebase

// function fetchAllData(){
//     firebase.database().ref('Polls').once('value', function(snapshot){
//         snapshot.forEach(
//             function(childSnapshot){
//                 let title = childSnapshot.val().title;
//                 let option1 = childSnapshot.val().option1;
//                 let option2 = childSnapshot.val().option2;
//                 let option3 = childSnapshot.val().option3;
//                 let option4 = childSnapshot.val().option4;
//                 addDataToPollPage(title,option1,option2,option3,option4);
//             }
//     )
//     });
// }

// window.onload(fetchAllData);




