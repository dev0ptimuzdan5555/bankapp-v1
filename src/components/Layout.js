import React from "react";
import Menu from "./Menu";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <div>
    <Menu />
    <div className="jumbotron">
      <h2>{}</h2>
      <p className="lead">{}</p>
    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
