import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR0aEI9EwGOjoAm50RgG8gsPyCetEEZ6c",
  authDomain: "crypto-app-8af32.firebaseapp.com",
  projectId: "crypto-app-8af32",
  storageBucket: "crypto-app-8af32.appspot.com",
  messagingSenderId: "350566314297",
  appId: "1:350566314297:web:aa91021bb27e1f754278e8",
  measurementId: "G-RF2SY8BT3E",
};
// Fix hot reload Firebase problem
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// Extract user credentials
const mapUserFromFirebase = (user) => {
  const { additionalInfo } = user;
  const { username, profile } = additionalInfo;
  const { avatar_url } = profile;
  return {
    avatar: avatar_url,
    username,
  };
};

// Auth state change handler
export const onAuthStateChange = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {});
};

export const loginGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
  // .then(mapUserFromFirebase);
};
