import logo from "./logo.svg";
import "./App.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";
function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ user", user);
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        console.log(
          "🚀 ~ file: App.js ~ line 14 ~ .then ~ userCredential",
          userCredential
        );
        // Signed in
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email </label>
              <input
                type="text"
                name="email"
                required
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                name="pass"
                required
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="button-container" onClick={handleSubmit}>
              <input type="submit" />
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
