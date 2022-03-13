
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
