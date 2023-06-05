import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a
          href="index.html"
          className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">CleanSpace</h2>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/Home" className="nav-item nav-link active">Home</Link>
            <Link to="/About" className="nav-item nav-link">About</Link>
            <Link to="/Shop" className="nav-item nav-link">Shop</Link>
            <Link to="/Contact" className="nav-item nav-link">Contact</Link>
            <button type="">LogOut</button>
          </div>
          <Link
            to="/Myaccount"
            className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
          >
            My Account<i class="fa fa-arrow-right ms-3" />
          </Link>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </div>
  );
};

export default Navbar;
