// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyCg22QHBGITH9jnGpf0TlG0Qr5Ja_ndqAg",
    authDomain: "contact-form-96f2b.firebaseapp.com",
    databaseURL: "https://contact-form-96f2b.firebaseio.com",
    projectId: "contact-form-96f2b",
    storageBucket: "contact-form-96f2b.appspot.com",
    messagingSenderId: "765191400801",
    appId: "1:765191400801:web:e2d0108efabffca8906920",
    measurementId: "G-5K6LHHQQJG"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contact-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }