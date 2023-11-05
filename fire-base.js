
  var config = {
        apiKey: "AIzaSyAZ_mhIxadgDKji9vG0jPyV7IPAGe5SWWE",
        authDomain: "email-58788.firebaseapp.com",
        databaseURL: "https://email-58788-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "email-58788",
        storageBucket: "email-58788.appspot.com",
        messagingSenderId: "361966386140",
        appId: "1:361966386140:web:fe7078be749ebbcf73ad19"
  };
  firebase.initializeApp(config);



  // Reference to the messages collection in Firebase
  var messagesRef = firebase.database().ref('subscribers');

  // Function to handle form submission
  document.getElementById('email-contact').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the email address from the input field
    var emailid = document.getElementById('emailid').value;

    // Save the email address to Firebase
    saveEmail(emailid);

    // Display a success message
    var alertElement = document.getElementById('alert-id');
    alertElement.style.display = 'block';
    alertElement.innerHTML = 'Thank you for submitting your email!';

    // Clear the form
    document.getElementById('email-contact').reset();
  });

  // Function to save the email to Firebase
  function saveEmail(email) {
    var newEmailRef = messagesRef.push();
    newEmailRef.set({
      email: email
    });
  }

