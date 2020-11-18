 import firebase from 'firebase';

    var firebaseConfig = {
        apiKey: "AIzaSyCElfNske0snjWL7C9ZHXXAI0n2IL2DLL4",
        authDomain: "login-dbc2b.firebaseapp.com",
        databaseURL: "https://login-dbc2b.firebaseio.com",
        projectId: "login-dbc2b",
        storageBucket: "login-dbc2b.appspot.com",
        messagingSenderId: "423958604480",
        appId: "1:423958604480:web:41fd864827a68e8ba15b25"
  };
 
 const fire  = firebase.initializeApp(firebaseConfig);

 export default fire;