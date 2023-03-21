import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_KEY,
    authDomain: process.env.REACT_APP_AUTH_SERVICE,
    projectId: process.env.REACT_APP_ID,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_APP_STORAGE_SENDERID,
    appId: process.env.REACT_APP_APPID
};