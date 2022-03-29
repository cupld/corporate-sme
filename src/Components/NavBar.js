import React from "react";
import { observer } from "mobx-react";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <img
          className="imaging"
          src="https://cdn-icons-png.flaticon.com/512/1600/1600196.png"
        />
        Application Form<p></p>
        <img
          className="imaging"
          src="https://cdn-icons-png.flaticon.com/512/2541/2541984.png"
        />
        Requirment
        <img
          className="imaging"
          src="https://cdn-icons-png.flaticon.com/512/3617/3617143.png"
        />
        Application Status
        <img
          className="settingImage"
          src="https://cdn-icons.flaticon.com/png/512/2881/premium/2881031.png?token=exp=1648539442~hmac=551a93e781774002754befb2d5c4b1c4"
        />
        <p className="settingPara">Setting</p>
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
      <div className="gbkLink">
        <p>Gulf Bank of Kuwait Website</p>
        <p>
          <a href="https://www.e-gulfbank.com/en/personal">
            https://www.e-gulfbank.com/en/personal
          </a>
        </p>
      </div>
      <div className="callCenter">
        Call Us<p>1805805</p>
        <p>
          <img
            className="callCenterImg"
            src="https://cdn-icons.flaticon.com/png/512/4526/premium/4526832.png?token=exp=1648540420~hmac=0799f41e88a3d6de9855ec505cfa39e1"
          />
        </p>
      </div>
    </div>
  );
}

export default observer(NavBar);
