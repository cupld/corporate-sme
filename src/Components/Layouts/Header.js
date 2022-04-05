import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  query,
  collection,
  getDocs,
  where,
  getDoc,
  doc,
} from "firebase/firestore";
import authStore from "../../stores/AuthStore";
import { onAuthStateChanged } from "firebase/auth";
import { observer } from "mobx-react";

function Header() {
  console.log(
    "🚀 ~ file: Header.js ~ line 17 ~ Header ~ authStore.loading",
    authStore.loading
  );
  if (authStore.loading) return <p>loading</p>;
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
        <div className="fullName">
          {authStore.user.fullname}
          <hr />
          {authStore.user.usertype}
        </div>
      </div>
    </div>
  );
}

export default observer(Header);
