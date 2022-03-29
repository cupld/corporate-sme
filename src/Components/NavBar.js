import React from "react";
import { observer } from "mobx-react";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <img
          className="imaging"
          src="https://cdn-icons.flaticon.com/png/512/4838/premium/4838739.png?token=exp=1648457924~hmac=441eefc1879a30340bf2502ea392d7e1"
        />
        Application Form<p></p>
        <img
          className="imaging"
          src="https://cdn-icons-png.flaticon.com/512/2541/2541984.png"
        />
        Requirment
        <img
          className="settingImage"
          src="https://cdn-icons.flaticon.com/png/512/2881/premium/2881031.png?token=exp=1648532570~hmac=72b144dc3a06d275eae7199bf9d0935f"
        />
        <p className="settingPara">Setting</p>
      </div>
      <div className="logoGBK">
        <img
          className="gbkLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Gulf_Bank_Logo.svg/2560px-Gulf_Bank_Logo.svg.png"
        />
      </div>
    </div>
  );
}

export default observer(NavBar);
