// import React from "react";
// import { useNavigate } from "react-router-dom";
import { makeAutoObservable } from "mobx";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import swal from "sweetalert";

class AuthStore {
  user = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
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
          fullname: user.fullname,
          usertype: "",
        });
        swal("Sign UP", "Signed Up Successfully!", "success", {
          dangerMode: true,
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

  fetchUser = () => {
    try {
      onAuthStateChanged(auth, async (comminguser) => {
        if (comminguser) {
          const docRef = doc(db, "users", comminguser.uid);
          const docSnap = await getDoc(docRef);
          this.user = {
            userName: docSnap.data().username,
            fullname: docSnap.data().fullname,
            usertype: docSnap.data().usertype,
            uid: docSnap.data().uid,
          };
          this.loading = false;
        }
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: AuthStore.js ~ line 73 ~ AuthStore ~ error",
        error
      );
    }
  };
}
const authStore = new AuthStore();
authStore.fetchUser();
export default authStore;
