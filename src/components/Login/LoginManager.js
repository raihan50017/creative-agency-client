import * as firebase from "firebase/app";
import "firebase/auth";
import {firebaseConfig} from './firebase.config';

export const initializeLoginFramework = () =>{
    firebase.initializeApp(firebaseConfig);
}

export const handleGoogleSignIn = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(result => {
      const {displayName, email, photoURL} = result.user;
      const signedInUser = {
        name: displayName,
        email: email,
        img: photoURL
      }
      
      return signedInUser;

    })
    .catch(err => {
      console.log(err);
    })
  }