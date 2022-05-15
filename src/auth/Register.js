import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import {signup} from "../function/auth";

const Register = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
});
 

const { name, email, password, success, error } = values;

const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
};

const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error, success: false });
        } else {
            setValues({
              ...values,
              name: "",
              email: "",
              password: "",
              error,
              success:
                "New Account Created! Please Login",
            });
            // toast.success('New Account Created! Please Login');
        }
        
    });
};



    return (
      <div>
        {/* <ToastContainer /> */}

        <div>
          <div className="authincation section-padding">
            <div className="container h-100">
              <div className="row justify-content-center h-100 align-items-center">
                <div className="col-xl-5 col-md-6">
                  <div className="auth-form card">
                    <div className="mini-logo text-center my-4">
                      <Link to="/">
                        <img src="../images/logo-2.png" alt="" className="" />
                      </Link>
                      <h4 className="card-title mt-5">Create your account</h4>
                    </div>
                    <div className="card-body">
                      <form
                        method="post"
                        name="myform"
                        className="signin_validate row g-3"
                      >
                        <div className="col-12">
                          <label className="form-label text-dark">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            onChange={handleChange("name")}
                            value={name}
                          />
                        </div>

                        <div className="col-12 ">
                          <label className="form-label text-dark">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="hello@example.com"
                            onChange={handleChange("email")}
                            value={email}
                          />
                        </div>

                        <div className="col-12">
                          <label className="form-label text-dark">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={handleChange("password")}
                            value={password}
                          />
                        </div>
                        {error && <p className="text-danger">{error}</p>}
                        {success && <p className="text-success">{success}</p>}
                        <div className="d-grid gap-2">
                          <button
                            type="submit"
                            className="btn btn-danger "
                            onClick={clickSubmit}
                          >
                            Create account
                          </button>
                        </div>
                      </form>
                      <div className="text-center">
                        <p className="mt-3 mb-0">
                          {" "}
                          <Link className="text-dark" to="/login">
                            Sign in
                          </Link>{" "}
                          to your account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;
