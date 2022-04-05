import "../../App.css";
import { useState } from "react";
import authStore from "../../stores/AuthStore";

function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    fullname: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    authStore.userSignUp(user);
    console.log("🚀 ~ file: signup.js ~ line 13 ~ handleSubmit ~ user", user);
  };
  return (
    <div className="containerUp">
      <header className="sHeading">Sign Up</header>
      <div className="sDiv">
        <form onSubmit={handleSubmit}>
          <div className="">
            <p>Full Name </p>
            <input
              placeholder="Enter your Name"
              className="sInput"
              type="text"
              name="name"
              required
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
            />
          </div>
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

          <button className="sButton" onClick={handleSubmit} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
