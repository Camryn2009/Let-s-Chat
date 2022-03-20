
var firebaseConfig = {
      apiKey: "AIzaSyA5yXVzJTH440igYqOR75gx60iPo--zepk",
      authDomain: "letschat-3ae06.firebaseapp.com",
      databaseURL: "https://letschat-3ae06-default-rtdb.firebaseio.com",
      projectId: "letschat-3ae06",
      storageBucket: "letschat-3ae06.appspot.com",
      messagingSenderId: "34353631900",
      appId: "1:34353631900:web:4f174c804caa70cfc35359"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name-"+ Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roo_name", name);
      window.location="kwitter_page.html";
}

