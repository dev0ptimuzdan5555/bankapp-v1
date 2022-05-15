import React, {useState} from "react";
import { Link, Redirect} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { signin, authenticate, isAuthenticated} from "../function/auth";

const Login = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
    loading: false,
    redirectToReferrer: false
});



   

const { email, password, loading, error,  success, redirectToReferrer } = values;

const { user } = isAuthenticated();

const handleChange = name => event => {
  setValues({ ...values, error: false, [name]: event.target.value });
};



const clickSubmit = event => {
event.preventDefault();
setValues({ ...values, error: false, loading: true, success: true });
signin({ email, password }).then(data => {
    if (data.error) {
        setValues({ ...values, error: data.error, loading: false, success: true });
    } else {
        authenticate(data, () => { 
            setValues({
              ...values,
              success: "Login Successful",
              error,
              redirectToReferrer: true,
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
    style={{ fontSize: 50, color: "#FD5D5D" }}
    spin
    delay={300}
  />
);


const LoginForm = () => (
  <div>
    <form method="post" name="myform" className="signin_validate row g-3 ">
      <div className="col-12">
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
        <label className="form-label text-dark">Password</label>
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
        <button type="submit" className="btn btn-danger" onClick={clickSubmit}>
          Sign in
        </button>
      </div>
    </form>
    <p className="mt-3 mb-0 text-dark">
      Don't have an account?{" "}
      <Link className="text-danger" to="/register">
        Sign up
      </Link>
    </p>
  </div>
);

    return (
      <div>
        <div className="authincation section-padding">
          <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
              <div className="col-xl-5 col-md-6">
                <div className="auth-form card">
                  <div className="card-body">
                    {loading ? (
                      <div className="text-center">
                        <Spin indicator={antIcon} />
                      </div>
                    ) : (
                      <div className="mini-logo text-center my-4">
                        <img
                          src="../images/logo-2.png"
                          alt=""
                          className=""
                        />
                        <h4 className="card-title mt-5">Sign in to PAYL0</h4>
                      </div>
                    )}
                    {/* <ToastContainer /> */}
                    {LoginForm()}
                    {redirectUser()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
