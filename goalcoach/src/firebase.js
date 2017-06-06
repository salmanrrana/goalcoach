import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB548N6AU9ZCyokAiY2De-abtQeiMb27ZQ",
  authDomain: "goalcoach-7c7ad.firebaseapp.com",
  databaseURL: "https://goalcoach-7c7ad.firebaseio.com",
  projectId: "goalcoach-7c7ad",
  storageBucket: "goalcoach-7c7ad.appspot.com",
  messagingSenderId: "404960826791"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
