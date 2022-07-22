  // Import the functions you need from the SDKs you need
  import {initializeApp} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  import {
      getDatabase,
      set,
      ref,
      push,
      child,
      onValue,
      onChildAdded
  } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
  // your config code
    apiKey: "AIzaSyBgGsXzq99wGHhqIL6JGqplp8Psy0r9rto",
    authDomain: "superwebchat-9f09a.firebaseapp.com",
    projectId: "superwebchat-9f09a",
    storageBucket: "superwebchat-9f09a.appspot.com",
    messagingSenderId: "1085720956832",
    appId: "1:1085720956832:web:b9a6403421914ebaa75ec5"
   };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  var myName = prompt("Enter your name");

  submit.addEventListener('click', (e) => {
      var message = document.getElementById('message').value;
      var name = myName;

      const id = push(child(ref(database), 'messages')).key;

      set(ref(database, 'messages/' + id), {
          name: name,
          message: message
      });
      document.getElementById('message').value = "";
      alert('message has sent');

  });

  const newMsg = ref(database, 'messages/');
  onChildAdded(newMsg, (data) => {
      if(data.val().name != myName) {
          var divData = '<div class="d-flex justify-content-start mb-4" id="fromDiv">\n' +
              '                        <div class="img_cont_msg">\n' +
              '                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"\n' +
              '                                 class="rounded-circle user_img_msg">\n' +
              '                        </div>\n' +
              '                        <div class="msg_cotainer" >\n' +
              '                            '+data.val().message+'' +
              '                            <span class="msg_time"></span>\n' +
              '                        </div>\n' +
              '                    </div>';
          var d1 = document.getElementById('bodyContent');
          d1.insertAdjacentHTML('beforebegin', divData);
      }else{
          var divData = '<div class="d-flex justify-content-end mb-4">\n' +
              '                        <div class="msg_cotainer_send" id="sendDiv">\n' +
              '                            '+data.val().message+'' +
              '                            <span class="msg_time_send">8:55 AM, Today</span>\n' +
              '                        </div>\n' +
              '                        <div class="img_cont_msg">\n' +
              '                            <img src="./assets/user.png"\n' +
              '                                 class="rounded-circle user_img_msg">\n' +
              '                        </div>\n' +
              '                    </div>';
          var d1 = document.getElementById('bodyContent');
          d1.insertAdjacentHTML('beforebegin', divData);
      }
  });

