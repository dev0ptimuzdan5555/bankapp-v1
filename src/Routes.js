import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";



import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./pages/Home";

import Footer from "./components/Footer";


import UserDashboard from "./user/UserDashboard";

import Transfer from "./user/Transfer";

import PrivateRoute from "./components/routes/PrivateRoute";




const Routes = () => {

    
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />

          <PrivateRoute
            path="/user/dashboard"
            exact
            component={UserDashboard}
          />

          <PrivateRoute path="/user/transfer" exact component={Transfer} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
};

export default Routes;
