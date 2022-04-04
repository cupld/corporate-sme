import "../App.css";
import { useState } from "react";
import authStore from "../stores/AuthStore";
import Application from "../Components/App/Application";
import { Route } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({
    email: "",
    fullname: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    authStore.userSignUp(user);
    console.log("🚀 ~ file: signup.js ~ line 13 ~ handleSubmit ~ user", user);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Full Name </label>
              <input
                type="text"
                name="fullname"
                required
                onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              />
            </div>
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

export default SignUp;
