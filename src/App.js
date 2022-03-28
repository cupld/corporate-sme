import logo from "./logo.svg";
import "./App.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";
import Req from "./Req";
function App() {
  return <Req />;
}

export default App;
