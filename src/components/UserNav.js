import React from "react";
import { signout, isAuthenticated } from "../function/auth";
import { Link, useHistory } from "react-router-dom";
import SideBarNav from "./SideBarNav";

// const isActive = (history, path) => {
//   if (history.location.pathname === path) {
//       return { color: "#ff9900" };
//   } else {
//       return { color: "#ffffff" };
//   }
// };

const UserNav = () => {
  const history = useHistory();
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="header-content">
                <div className="header-left">
                  <div className="brand-logo">
                    <img src="../images/logo-2.png" alt="" className="" />
                  </div>
                </div>
                <div className="header-right">
                  <div className="dark-light-toggle">
                    <span className="dark">
                      <i className="ri-moon-line" />
                    </span>
                    <span className="light">
                      <i className="ri-sun-line" />
                    </span>
                  </div>
                  <div className="nav-item dropdown notification dropdown">
                    <div
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      className
                      aria-expanded="false"
                    >
                      <div className="notify-bell icon-menu">
                        <span>
                          <i className="ri-notification-2-line" />
                        </span>
                      </div>
                    </div>
                    <div
                      tabIndex={-1}
                      role="menu"
                      aria-hidden="true"
                      className="dropdown-menu notification-list dropdown-menu dropdown-menu-right"
                    >
                      <h4>Recent Notification</h4>
                      <div className="lists">
                        <a className href="index.html#">
                          <div className="d-flex align-items-center">
                            <span className="me-3 icon success">
                              <i className="ri-check-line" />
                            </span>
                            <div>
                              <p>Credit Alert</p>
                              <span>2022-04-03: $7, 000, 000</span>
                            </div>
                          </div>
                        </a>
                        <a className href="index.html#">
                          <div className="d-flex align-items-center">
                            <span className="me-3 icon success">
                              <i className="ri-check-line" />
                            </span>
                            <div>
                              <p>Credit Alert</p>
                              <span>2022-04-03: $10, 000, 000</span>
                            </div>
                          </div>
                        </a>
                        {/* <a className href="index.html#">
                      <div className="d-flex align-items-center">
                        <span className="me-3 icon success"><i className="ri-check-line" /></span>
                        <div>
                          <p>Device confirmation completed</p>
                          <span>2020-11-04 12:00:23</span>
                        </div>
                      </div>
                    </a> */}

                        <p>
                          all notification
                          <i className="" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown profile_log dropdown">
                    <div
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      className
                      aria-expanded="false"
                    >
                      <div className="user icon-menu active">
                        <span>
                          <i className="ri-user-line" />
                        </span>
                      </div>
                    </div>
                    <div
                      tabIndex={-1}
                      role="menu"
                      aria-hidden="true"
                      className="dropdown-menu dropdown-menu dropdown-menu-right"
                    >
                      <div className="user-email">
                        <div className="user">
                          <span className="thumb">
                            <img src="images/profile/3.png" alt="" />
                          </span>
                          <div className="user-info">
                            <h5>{name}</h5>
                            <span>{email}</span>
                          </div>
                        </div>
                      </div>
                      <Link className="dropdown-item" to="/user/dashboard">
                        <span>
                          <i className="ri-home-5-line" />
                        </span>
                        Account Balance
                      </Link>

                      <Link className="dropdown-item" to="/user/transfer">
                        <span>
                          <i className="ri-wallet-line" />
                        </span>
                        Send Money
                      </Link>

                      <Link className="dropdown-item" to="/user/dashboard">
                        <span>
                          <i className="ri-settings-3-line" />
                        </span>
                        Settings
                      </Link>

                      {isAuthenticated() && (
                        <Link
                          className="dropdown-item logout"
                          onClick={() =>
                            signout(() => {
                              history.push("/");
                            })
                          }
                        >
                          <i className="ri-logout-circle-line" />
                          Logout
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SideBarNav />
    </div>
  );
};

export default UserNav;
