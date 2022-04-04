// import React from "react";
// import { useNavigate } from "react-router-dom";
import { makeAutoObservable } from "mobx";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this, {});
  }
  userSignUp = (user) => {
    createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password,
      user.username
    )
      .then(async (userCredential) => {
        await setDoc(doc(db, "users", userCredential.user.uid), {
          username: userCredential.user.displayName,
          email: userCredential.user.email,
          usertype: "",
        });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          "🚀 ~ file: App.js ~ line 33 ~ handleSubmit ~ errorMessage",
          errorMessage
        );
      });
    // return <Navigate to="/" />;
  };

  userSignIn = (user) => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(async (userCredential) => {
        await getDoc(doc(db, "users", userCredential.user.uid), {
          email: userCredential.user.email,
          password: userCredential.user.password,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          "🚀 ~ file: AuthStore.js ~ line 50 ~ AuthStore ~ error.message",
          error.message
        );
      });
  };
}
const authStore = new AuthStore();
export default authStore;
