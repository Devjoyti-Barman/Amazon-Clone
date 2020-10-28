import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    
    apiKey: "AIzaSyC1CnliEywEwaCEGffH_TDtAw2OVDZh5Uc",
    authDomain: "clone-11460.firebaseapp.com",
    databaseURL: "https://clone-11460.firebaseio.com",
    projectId: "clone-11460",
    storageBucket: "clone-11460.appspot.com",
    messagingSenderId: "329611480608",
    appId: "1:329611480608:web:246e362f36b1f8587bb645",
    
});

const db = firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth}