import React,{ Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { signout, isAuthenticated } from "../function/auth";


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#FD5D5D" };
    } else {
        return { color: "#ffffff" };
    }
};


const Menu = () => {

 const history = useHistory();

  return (
    <div>
      <div>
        {/* Navbar */}

        <div className="container ">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom ">
            <Link
              href="/"
              className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
            >
              <img src="../images/logo-2.png" alt="Wave-Bank" className="" />
            </Link>
            {/* <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"></ul> */}

            <span>
             
            </span>
            <div className="col-md-3 text-end">
              {/* <Fragment>
                {isAuthenticated() && isAuthenticated().user.role === "user" && (
                  <Link
                    className="btn btn-danger me-2"
                    style={isActive(history, "/user/dashboard")}
                    to="/user/dashboard"
                  >
                    Dashboard
                  </Link>
                )}
              </Fragment> */}

              {!isAuthenticated() && (
                <div>
                  <Fragment>
                    {/* <Link
                      type="button"
                      className="btn btn-danger me-2"
                      style={isActive(history, "/login")}
                      to="/login"
                    >
                      Login
                    </Link> */}
                    <Link
                      type="button"
                      className="btn btn-danger"
                      style={isActive(history, "/register")}
                      to="/register"
                    >
                      Sign-up
                    </Link>
                  </Fragment>
                </div>
              )}

              <Fragment>
                {isAuthenticated() && (
                  <Link
                    className="btn btn-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      signout(() => {
                        history.push("/");
                      })
                    }
                  >
                    Logout
                  </Link>
                )}
              </Fragment>
            </div>
          </header>
        </div>
      </div>
    </div>
  );

};

export default Menu;
