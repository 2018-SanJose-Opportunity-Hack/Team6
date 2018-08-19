import credentials from './credentials.js';
const firebase = require('firebase');
const firebaseWeb = firebase.initializeApp(credentials.firebase);
const firebaseInit = {
  initialize: firebaseWeb
}

export default firebaseInit;
