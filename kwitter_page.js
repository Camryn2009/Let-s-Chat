//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBQs4X9gKBkaYSRXBkLvvdM_lb-De0Rw9Q",
      authDomain: "kwitter-4c596.firebaseapp.com",
      databaseURL: "https://kwitter-4c596-default-rtdb.firebaseio.com",
      projectId: "kwitter-4c596",
      storageBucket: "kwitter-4c596.appspot.com",
      messagingSenderId: "1032344976981",
      appId: "1:1032344976981:web:99c9955750de7592595edc"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
    
//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message:mag,
       like:0     
      });

      document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}