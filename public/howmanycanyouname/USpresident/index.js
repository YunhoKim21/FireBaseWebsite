var presidents = [];
var current = 0;



// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDiC6WM5YD35jv3y8MlDpiLe8p5Q5fAmvs',
  authDomain: "mywebsite-e2544.firebaseapp.com",
  projectId: 'mywebsite-e2544'
});

var db = firebase.firestore();

db.collection("USPresidents").get().then((snapshot) => {
  snapshot.forEach((doc) => {
    presidents.push(doc.data().name);
  });
});

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function update(){
  const indicator = document.getElementById('currentnumber');
  indicator.innerHTML = 'Current : '+current+'/46';
}
function end(){
  const indicator = document.getElementById('currentnumber');
  indicator.innerHTML = 'Your score is '+current+'/46';

  const entry = document.getElementById('entrys');
  entry.style.visibility = 'hidden';
  entry.style.display = 'none';

  const buttons = document.getElementById('buttons');
  buttons.style.display = 'none';
  buttons.style.visibility = 'hidden';

  const leaderboardtext = document.getElementById('leaderboardtext');
  leaderboardtext.style.visibility = 'show';
  leaderboardtext.style.display = 'block';

  const leaderboard = document.getElementById('leaderboard');
  leaderboard.style.visibility = 'show';
  leaderboard.style.display = 'block';


  var user = firebase.auth().currentUser;
  if (user){
  console.log(user.email);
}
else{

}
}
function enter(){
  const entry = document.getElementById('entry');
  var name = entry.value;
  if (presidents.includes(name)){
    current += 1;
    removeItemOnce(presidents, name);
    entry.value = '';
  }

  update();
}
function search(ele){
  if(event.key == 'Enter'){
    enter();
  }
}
