
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC0U66Rl8Q8h6UU4L1WtCYdAGTeJBxrDrQ",
    authDomain: "instachat-project-adbdf.firebaseapp.com",
    databaseURL: "https://instachat-project-adbdf-default-rtdb.firebaseio.com",
    projectId: "instachat-project-adbdf",
    storageBucket: "instachat-project-adbdf.appspot.com",
    messagingSenderId: "886794243167",
    appId: "1:886794243167:web:365bfd00435165391b5fea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot)
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  console.log("Room name - "+ Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;

  //End code
  });});}
getData();

function addRoom()
{

room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"     
});

localStorage.setItem("room_name", room_name);
window.location = "page.html";
}

function redirectToRoomName(name)
{

  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "page.html";


}