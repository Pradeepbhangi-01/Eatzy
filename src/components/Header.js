import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useNetworkStatus from "../utils/useNetworkStatus";

const Header = () => {
  let [btnButton, setBtnButton] = useState("Login");

  const loginUpdate = () => {
    btnButton == "Login" ? setBtnButton("Logout") : setBtnButton("Login");
  };
  const onlineStatus = useNetworkStatus();

  // we are subscribing the store using selector
  const cartValue = useSelector((store) => store.cart.items); // need access to cart items

  console.log("cartValue ", cartValue);
  return (
    <>
      <div className="flex justify-between bg-blue-100 shadow-lg">
        <div className="logo-container">
          <img className="logoImg w-28" src={LOGO_URL} />
        </div>
        <div className="flex items-center ">
          <ul className="flex ">
            <li className="px-4"> Status: {onlineStatus ? "🟢" : "🔴"} </li>
            <li className="px-4">
              <Link to="/">Home </Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4 font-bold">
              <Link to="/cart">Cart - {cartValue.length}</Link>
            </li>
            <li className="px-4">Profile</li>
            <button className="login-btn px-4" onClick={loginUpdate}>
              {btnButton}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
