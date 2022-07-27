import firebase from "firebase"

const app = firebase.initializeApp({
    apiKey: "MVIpodUmTmMef3RtGPtncNLY4cieR7pUaH8yYPFG",
    authDomain: "clase-firebase-e7501.firebaseapp.com",
    databaseURL: "https://clase-firebase-e7501-default-rtdb.firebaseio.com/",
    projectId: "clase-firebase-e7501",
});
  
  const rtdb = firebase.database()

  export {rtdb}
  console.log("soy la database",rtdb) 

