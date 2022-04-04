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
import swal from "sweetalert";
import { Navigate } from "react-router-dom";

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
      user.fullname
    )
      .then(async (userCredential) => {
        await setDoc(doc(db, "users", userCredential.user.uid), {
          email: userCredential.user.email,
          username: userCredential.user.displayName,
          fullname: userCredential.user.fullname,
          usertype: "",
        });
        swal("Sign UP", "You are Signed Up Successfully!", "success");
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          "🚀 ~ file: App.js ~ line 33 ~ handleSubmit ~ errorMessage",
          errorMessage
        );
      });
    return <Navigate to="/" />;
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
