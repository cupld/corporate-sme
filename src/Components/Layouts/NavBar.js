import React from "react";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="icon">
          <NavLink to={`/`}>
            <img
              className="imaging"
              src="https://cdn-icons-png.flaticon.com/512/1600/1600196.png"
            />
          </NavLink>
          Application Form
        </div>

        <div className="icon">
          <NavLink to={`/Requirements`}>
            <img
              className="imaging"
              src="https://cdn-icons-png.flaticon.com/512/2541/2541984.png"
            />
          </NavLink>
          Requirment
        </div>
        <div className="icon">
          <NavLink to={`/Status`}>
            <img
              className="imaging"
              src="https://cdn-icons-png.flaticon.com/512/3617/3617143.png"
            />
          </NavLink>
          Application Status
        </div>
        {/* <div className="icon">
          <img
            className="imaging"
            src="https://cdn-icons-png.flaticon.com/512/3132/3132084.png"
          />
          <p className="settingPara">Setting</p>
        </div> */}
      </div>
    </div>
  );
}

export default observer(NavBar);
