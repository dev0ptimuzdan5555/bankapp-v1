import React from 'react'
import { signout, isAuthenticated } from "../function/auth";
import { Link, useHistory } from "react-router-dom";



const SideBarNav = () => {
   const history = useHistory();

  return (
    <>
      <div className="sidebar">
        <div className="logo-nav">
          <img src="../images/logo-2.png" alt="Wave-Bank" className="" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/user/dashboard">
                <span>
                  <i className="ri-home-5-line" />
                </span>
                <span className="nav-text text-white bg-danger display-9">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to="/user/transfer">
                <span>
                  <i className="ri-wallet-line" />
                </span>
                <span className="nav-text text-white bg-danger display-9">
                  Send Money
                </span>
              </Link>
            </li>

            <li>
              <Link to="/user/dashboard">
                <span>
                  <i className="ri-settings-3-line" />
                </span>
                <span className="nav-text text-white bg-danger display-9">
                  Settings
                </span>
              </Link>
            </li>

            {isAuthenticated() && (
              <li className="logout">
                <Link
                  href="signin.html"
                  onClick={() =>
                    signout(() => {
                      history.push("/");
                    })
                  }
                >
                  <span>
                    <i className="ri-logout-circle-line" />
                  </span>
                  <span className="nav-text text-white bg-danger display-9">
                    Signout
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}


export default SideBarNav;