import "./pages/welcome"
import "./pages/chat"
import "./router" 
 
import firebase from "firebase/app"

const app = firebase.initializeApp({
    apiKey: "MVIpodUmTmMef3RtGPtncNLY4cieR7pUaH8yYPFG",
    authDomain: "clase-firebase-e7501.firebaseapp.com",
    databaseURL: "https://clase-firebase-e7501-default-rtdb.firebaseio.com/",
    projectId: "clase-firebase-e7501",
});
  
  const database = firebase.database()

  console.log(database)

const API_BASE_URL = "http://localhost.3000";



