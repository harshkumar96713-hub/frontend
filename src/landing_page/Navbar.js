import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img src="/media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0 d-flex gap-4">
              <li className="nav-item">
             <a className="nav-link active" href="https://dashboard-1-qqkf.onrender.com/">
  Signup
</a>

              </li>
              <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/products"}>
                Prooduct
                </Link>
              </li>
              <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to={"/price"}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link active" aria-current="page" to={"/support"}>
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
