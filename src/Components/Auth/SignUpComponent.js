import React from "react";
import SignUp from "./SignUp";

function SignUpComponent() {
  return (
    <div className="app">
      <img
        className="imgSign"
        src="https://media-exp1.licdn.com/dms/image/C4D1BAQETHp7J5e_yyQ/company-background_10000/0/1601896093708?e=2147483647&v=beta&t=imWr5FMIyDd_JV5cbHUntkbgq3Dw-zbk4xDywoiSugI"
      />
      <div className="signup">
        <SignUp />
      </div>
    </div>
  );
}

export default SignUpComponent;
