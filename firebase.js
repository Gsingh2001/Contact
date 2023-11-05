// Your JavaScript code (the code you provided in your previous question) should be placed here.
		// Initialize Firebase, add the event listeners, and define the functions here.
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyDOUoczvZSQG7TdglfI-lvumw9Ry8QrDAw",
			authDomain: "organify-f7003.firebaseapp.com",
			databaseURL: "https://organify-f7003-default-rtdb.asia-southeast1.firebasedatabase.app",
			projectId: "organify-f7003",
			storageBucket: "organify-f7003.appspot.com",
			messagingSenderId: "940725476956",
			appId: "1:940725476956:web:5e430b9ae6696689eb1099"
		};

		firebase.initializeApp(config);

		// Reference messages collection
		var messagesRef = firebase.database().ref('messages');

		// Listen for form submit
		document.getElementById('fruitkha-contact').addEventListener('submit', submitForm);

		// Submit form
		function submitForm(e) {
			e.preventDefault();

			//Get value
			var name = getInputVal('name');
			var City = getInputVal('City');
			var email = getInputVal('email');
			var phone = getInputVal('phone');
			var message = getInputVal('message');

			// Save message
			saveMessage(name, City, email, phone, message);

			// Show alert
			document.querySelector('.alert').style.display = 'block';

			// Hide alert after 3 seconds
			setTimeout(function () {
				document.querySelector('.alert').style.display = 'none';
			}, 3000);

			// Clear form
			document.getElementById('fruitkha-contact').reset();
		}

		// Function to get form value
		function getInputVal(id) {
			return document.getElementById(id).value;
		}

		// Save message to firebase
		function saveMessage(name, City, email, phone, message) {
			var newMessageRef = messagesRef.push();
			newMessageRef.set({
				name: name,
				City: City,
				email: email,
				phone: phone,
				message: message
			});
		}