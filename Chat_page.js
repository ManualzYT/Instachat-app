//YOUR FIREBASE LINKS

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
  room_name = localStorage.getItem("room_name");

  function send()
  {
    
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name, 
    message: msg,
    likes:0,      
    });
    document.getElementById("msg").value = " ";

  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey
           = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";

//End code
    } });  }); }
getData();

function updateLike(message_id){

console.log("clicked on like button-" + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes;
});
}

function logout(){

    localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
