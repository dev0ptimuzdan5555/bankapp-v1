import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../function/auth";

const SellerRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() && isAuthenticated().user.role === "seller" ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/seller/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default SellerRoute;
