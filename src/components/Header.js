import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  let [btnButton, setBtnButton] = useState("Login");

  const loginUpdate = () => {
    btnButton == "Login" ? setBtnButton("Logout") : setBtnButton("Login");
  };
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logoImg" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <li>Profile</li>
            <button className="login-btn" onClick={loginUpdate}>
              {btnButton}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
