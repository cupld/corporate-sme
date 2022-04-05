import "../../App.css";
import { useState } from "react";
import authStore from "../../stores/AuthStore";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    authStore.userSignIn(user);
    console.log("🚀 ~ file: SignIn.js ~ line 13 ~ handleSubmit ~ user", user);
  };
  return (
    <div className="containerIn">
      <header className="sHeading">Sign In</header>
      <div className="sDiv">
        <form onSubmit={handleSubmit}>
          <div className="">
            <p>Email </p>
            <input
              placeholder="Enter your email"
              className="sInput"
              type="text"
              name="email"
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="">
            <p>Password </p>
            <input
              placeholder="Enter your password"
              className="sInput"
              type="password"
              name="pass"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <button className="sButton" onClick={handleSubmit}>
            SignIn
          </button>
          <Link to={`/`}>
            <p>Register here</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
