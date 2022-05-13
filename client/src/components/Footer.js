import React from 'react'

const Footer = () => {
  
  return (
    <div className="">
      {/* FOOTER */}
      <footer className="container ">
        <hr className="text-dark" />
        <p className="float-end nav-danger">
          <a href="#">Back to top</a>
        </p>
        <p className="text-dark">
          © 2021–2022 Payl0 Bank.Inc. ·
          {/* <a href="#">Privacy</a> ·{" "}
          <a href="#">Terms</a> */}
        </p>
      </footer>
    </div>
  );
}

export default Footer