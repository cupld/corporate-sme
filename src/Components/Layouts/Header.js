import React, { useEffect, useState } from "react";
import app from "../../firebase";

function Header() {
  return (
    <div>
      <div className="logoGBK">
        <img
          className="gbkLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Gulf_Bank_Logo.svg/2560px-Gulf_Bank_Logo.svg.png"
        />
      </div>
      <div>
        <img
          className="usernameLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Red-circle.svg/240px-Red-circle.svg.png"
        />
        <p className="fullName">Fahad AlJuwaihel</p>
      </div>
    </div>
  );
}

export default Header;
