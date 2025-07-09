import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
const Header = () => {
  let [btnButton, setBtnButton] = useState("Login");

  const loginUpdate = () => {
    btnButton == "Login" ? setBtnButton("Logout") : setBtnButton("Login");
  };
  const onlineStatus = useNetworkStatus();
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logoImg" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Status: {onlineStatus ? "🟢" : "🔴"} </li>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
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
