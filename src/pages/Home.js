import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { signin, authenticate, isAuthenticated } from "../function/auth";
import "animate.css";

import Layout from "../components/Layout";

const Home = () => {

     const [values, setValues] = useState({
       email: "",
       password: "",
       error: "",
       success: false,
       loading: false,
       redirectToReferrer: false,
     });

     const { email, password, loading, error, success, redirectToReferrer } =
       values;

     const { user } = isAuthenticated();

     const handleChange = (name) => (event) => {
       setValues({ ...values, error: false, [name]: event.target.value });
     };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true, success: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          loading: false,
          success: true,
        });
        toast.error(error);
      } else {
        authenticate(data, () => {
          setValues({
            ...values, success: "Login Successful",
            redirectToReferrer: true
          });
        });
        // toast.success("Login Successful");
      }
    });
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === "user") {
        return <Redirect to="/user/dashboard" />;
      } else {
        return <Redirect to="/" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };


  const antIcon = (
    <LoadingOutlined
      style={{ fontSize: 100, color: "#FD5D5D" }}
      spin
      delay={300}
    />
  );

    return (
      <div>
        <Layout>
          <main className="container">
            {/* <ToastContainer /> */}
            {redirectUser()}
            <div className="p-4 p-md-5 mb-4 text-dark  rounded payl0-bg">
              <div className="row g-0">
                <div className="col-sm-6 col-md-8">
                  <h3 className="display-4 text-dark mb-3 animate__animated animate__zoomIn animate__slow">
                    The New Generation Bank <br /> PAYL0 BANK
                  </h3>
                  <p className="lead my-3 mt-5 text-dark">
                    Send Money in Minutes
                  </p>
                  <p className="lead mb-0">
                    <Link
                      to="#"
                      className="text-white fw-bold btn btn-danger mt-2 mb-5"
                    >
                      Get Started
                    </Link>
                  </p>
                </div>

                {!isAuthenticated() && (
                  <div className="col-6 col-md-4 ">
                    {loading ? (
                      <div className="text-center mt-5">
                        
                        <Spin indicator={antIcon} />

                         <h5>checking credentials... please wait</h5>
                      </div>
                    ) : (
                      <form className="">
                        <h1 className="h3 mb-3 fw-normal text-center">
                          Please Login
                        </h1>

                        <div className=" form-floating pb-2">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="hello@example.com"
                            onChange={handleChange("email")}
                            value={email}
                          />
                          <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating pb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={handleChange("password")}
                            value={password}
                          />
                          <label htmlFor="floatingPassword">Password</label>
                        </div>
                        {error && <p className="text-danger">{error}</p>}
                        {success && <p className="text-success">{success}</p>}
                        <button
                          className="w-100 btn btn-md btn-danger"
                          type="submit"
                          onClick={clickSubmit}
                        >
                          Sign in
                        </button>
                        <p className="mt-2 text-muted text-center">
                          © Secured by payl0.inc server ltd{" "}
                        </p>
                      </form>
                    )}
                  </div>
                )}

                {isAuthenticated() && isAuthenticated().user.role === "user" && (
                  <div className="col-6 col-md-4">
                    <div>
                      <img
                        src="../images/about.jpg"
                        alt="Wave-Bank"
                        className="features-img "
                      />
                      <Link
                        className="w-100 btn btn-lg btn-danger mt-4"
                        type="submit"
                        to="/user/dashboard"
                      >
                        Back to Dashboard
                      </Link>
                      {/* <p className="mt-5 mb-3 text-muted">© 2017–2021</p> */}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className=" marketing mt-5">
              {/* Three columns of text below the carousel */}
              <div className="row">
                <div className="col-lg-4 mt-5 ">
                  <img
                    src="../images/payl01333.png"
                    alt="Wave-Bank"
                    className="animate__animated animate__slideInLeft animate__slow"
                  />

                  <h2 className="mt-3 fs-4 text-danger fw-bold">
                    Send Money From Anywhere
                  </h2>
                  <p className="text-dark">
                    Quickly and securely pay your bills or other people, without
                    cash or writing a check.
                  </p>
                  {/* <p>
                    <a className="btn btn-secondary" href="#">
                      View details »
                    </a>
                  </p> */}
                </div>
                {/* /.col-lg-4 */}
                <div className="col-lg-4 mt-5">
                  <img
                    src="../images/payl02.png"
                    alt="Wave-Bank"
                    className="animate__animated animate__slideInDown animate__slow"
                  />

                  <h2 className="mt-3 fs-4 text-danger fw-bold">Saving </h2>
                  <p className="text-dark">
                    Little by little, saving adds up build your savings with no
                    stress.
                  </p>
                  {/* <p>
                    <a className="btn btn-secondary" href="#">
                      View details »
                    </a>
                  </p> */}
                </div>
                {/* /.col-lg-4 */}
                <div className="col-lg-4 mt-5">
                  <img
                    src="../images/payl05111.png"
                    alt="Wave-Bank"
                    className="animate__animated animate__slideInRight animate__slow"
                  />
                  <h2 className="mt-3 fs-4 fw-bold text-danger">
                    Own a Business Account
                  </h2>
                  <p className="text-dark">
                    we support you with local relationship managers and bankers,
                    who work alongside your team to help keep your business on
                    track and moving forward.
                  </p>
                  {/* <p>
                    <a className="btn btn-secondary" href="#">
                      View details »
                    </a>
                  </p> */}
                </div>
                {/* /.col-lg-4 */}
              </div>
              {/* /.row */}
            </div>

            <div className="row mt-5 p-5">
              <div className="col-sm-5">
                <div className="credit-card visa">
                  <div className="type-brand">
                    <h4 className="text-white fw-bold">PAYL0</h4>
                    <img src="images/cc/visa.png" alt="" />
                  </div>
                  <div className="cc-number">
                    <h6>***</h6>
                    <h6>56**</h6>
                    <h6>****</h6>
                    <h6>**75</h6>
                  </div>
                  <div className="cc-holder-exp">
                    <h5 className="">Mr Larry D</h5>
                    <div className="exp">
                      <span>EXP:</span>
                      <strong>12/21</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-7">
                <h2 className="featurette-heading">
                  Swift Payment <span className="text-danger">Online</span>
                </h2>
              </div>
            </div>

            <div>
              {/* START THE FEATURETTES */}
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading">
                    Empower your financial Goals{" "}
                    <span className="text-danger">Bank with us.</span>
                  </h2>
                  <p className="lead text-dark ">
                    Our investment products and services are offered through
                    Payl0 financial Advisors.
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    src="../images/more-info.png"
                    alt="Wave-Bank"
                    className="features-img-2 sd-img animate__animated animate__fadeInLeftanimate__slow"
                  />
                </div>
              </div>
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7 order-3">
                  <h2 className="featurette-heading">
                    Discover new support for women entrepreneurs.{" "}
                    <span className="text-danger">Email Us.</span>
                  </h2>
                  <p className="lead text-dark">
                    Wherever you are in your financial journey, we'll work with
                    you to build an investment and wealth strategy to help you
                    reach your goals
                  </p>
                </div>
                <div className="col-md-5 order-1 payl0">
                  <img
                    src="../images/payl050000.png"
                    alt="Wave-Bank"
                    className="features-img sd-img"
                  />
                </div>
              </div>
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading">
                    Its More than Banking.{" "}
                    <span className="text-danger">We Show Love.</span>
                  </h2>
                  <p className="lead text-dark">
                    Together we can help support our community. Payl0 also build
                    relationships with the society by giving Back to the
                    society.
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    src="../images/payl05.png"
                    alt="Wave-Bank"
                    className="features-img-1 sd-img features-img-2 sd-img animate__animated animate__bounceIn__slow"
                  />
                </div>
              </div>

              <hr className="featurette-divider" />
            </div>
          </main>
        </Layout>
      </div>
    );
};

export default Home;
