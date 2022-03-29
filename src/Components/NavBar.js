import React from "react";
import { observer } from "mobx-react";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="icon">
          <img
            className="imaging"
            src="https://cdn-icons-png.flaticon.com/512/1600/1600196.png"
          />
          Application Form
        </div>
        <div className="icon">
          <img
            className="imaging"
            src="https://cdn-icons-png.flaticon.com/512/2541/2541984.png"
          />
          Requirment
        </div>
        <div className="icon">
          <img
            className="imaging"
            src="https://cdn-icons-png.flaticon.com/512/3617/3617143.png"
          />
          Application Status
        </div>
        <div className="icon">
          <img
            className="imaging"
            src="https://cdn-icons-png.flaticon.com/512/3132/3132084.png"
          />
          <p className="settingPara">Setting</p>
        </div>
      </div>
      <div className="logoGBK">
        <img
          className="gbkLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Gulf_Bank_Logo.svg/2560px-Gulf_Bank_Logo.svg.png"
        />
        <div>
          <img
            className="usernameLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Red-circle.svg/240px-Red-circle.svg.png"
          />
          <p className="fullName">Fahad AlJuwaihel</p>
        </div>
      </div>
    </div>
  );
}

export default observer(NavBar);
