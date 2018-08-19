import firebaseInit from './firebase.js';
const firebase = firebaseInit.initialize;

const addUser = (userID) => {
  return firebase.database().ref(`/users/${userID}`).set({
    status: 'online',
    channels: []
  })
}
const updateUser = (userID, userObject) => {
  return firebase.database().ref(`/users/${userID}`).update(userObject);
}
const getUserInfo = (userID) => {
  return firebase.database().ref(`/users/${userID}`)
}
export { 
  addUser,
  updateUser,
  getUserInfo
};
