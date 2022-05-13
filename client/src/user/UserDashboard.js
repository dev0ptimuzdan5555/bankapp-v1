import React from "react";
import UserNav from "../components/UserNav";
import { isAuthenticated } from "../function/auth";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  return (
    <>
      <div id="main-wrapper">
        <UserNav />

        <div className="content-body">
          <div className="container">
            <div className="page-title">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-4">
                  <div className="page-title-content">
                    <h3>Account Balance</h3>
                    <h4 className="mb-2">Welcome {name}</h4>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="breadcrumbs">
                    <a href="#">Home</a>
                    <span>
                      <i className="ri-arrow-right-s-line" />
                    </span>
                    <a href="#">Account Balance</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Balance Details</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="total-balance">
                          <p>Total Balance</p>
                          <h2>$17, 000, 000 </h2>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="balance-stats active">
                          <p>Last Week</p>
                          <h3>$17, 000, 000</h3>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="balance-stats">
                          <p>Expenses</p>
                          <h3>$0.00</h3>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="balance-stats">
                          <p>Taxes</p>
                          <h3>Calculating...</h3>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="balance-stats">
                          <p>Debt</p>
                          <h3>$0.00</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Bills</h4>
                  </div>
                  <div className="card-body">
                    <div className="bills-widget">
                      <div className="bills-widget-content d-flex justify-content-between align-items-center active">
                        <div>
                          <p>Netflix</p>
                          <h4>$17.00</h4>
                        </div>
                        <div>
                          <a href="#" className="btn btn-primary">
                            Pay Now
                          </a>
                        </div>
                      </div>
                      <div className="bills-widget-content d-flex justify-content-between align-items-center">
                        <div>
                          <p className="text-danger">Spotify</p>
                          <h4>$11.00</h4>
                        </div>
                        <div>
                          <a href="#" className="btn btn-primary">
                            Pay Now
                          </a>
                        </div>
                      </div>
                      <div className="bills-widget-content d-flex justify-content-between align-items-center">
                        <div>
                          <p className="text-danger">Youtube</p>
                          <h4>$11.00</h4>
                        </div>
                        <div>
                          <a href="#" className="btn btn-primary">
                            Pay Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Transaction History</h4>
                  </div>
                  <div className="card-body">
                    <div className="payments-content">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    defaultValue
                                  />
                                </div>
                              </th>
                              <th>Description</th>
                              <th>Amount</th>
                              <th>Date</th>
                              <th>Credit</th>
                              <th>Debit</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    defaultValue
                                  />
                                </div>
                              </td>
                              <td>
                                <img
                                  src="images/social/dropbox.png"
                                  alt=""
                                  width={22}
                                  className="me-3 img-fluid"
                                />
                                transactionRef:23194...Gold Ornaments
                                Purchase/:Bank Of A....
                              </td>
                              <td>$7, 000, 000</td>
                              <td>May 3, 2022</td>
                              <td>
                                <span className="badge px-3 py-2 bg-success">
                                  $7, 000, 000
                                </span>
                              </td>
                              <td>
                                <span className=" px-3 py-2 ">$0.00</span>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    defaultValue
                                  />
                                </div>
                              </td>
                              <td>
                                <img
                                  src="images/social/skype.png"
                                  alt=""
                                  width={25}
                                  className="me-3 img-fluid"
                                />
                                00:921transactionRef:12455...Gonstruction
                                /:BOA..:wireTf
                              </td>
                              <td>$10, 000, 000</td>
                              <td>May 4, 2022</td>
                              <td>
                                <span className="badge px-3 py-2 bg-success">
                                  $10, 000, 000
                                </span>
                              </td>
                              <td>
                                <span className=" px-3 py-2 ">$0. 00</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
