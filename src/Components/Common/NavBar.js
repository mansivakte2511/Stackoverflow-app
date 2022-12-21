import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a className="display-3 text-center blog-header-logo navbar-brand fw-bolder fs-1">
            MY Collection
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">
                  For Teams
                </a>
              </li>
              <searchfun></searchfun>
            </ul>
            <div classname="buttons">
              <a href="/login" classname="btn btn-outline-dark">
                <i classname="fa fa-sign-in me-1" />
                Login
              </a>
              <a href="/register" classname="btn btn-outline-dark ms-2">
                <i classname="fa fa-user-plus me-2"> </i>
                Register
              </a>
              {"{"}cartCount &gt; 0 ? ( ) : null{"}"}
              {"{"}/* {"{"}cartCount &gt; 0 ? (
              <a href="/myhome.in/cart" classname="btn btn-outline-dark ms-2">
                <i classname="fa fa-shopping-cart me-2" />
                <badge color="secondary" badgecontent="{cartCount}" />
              </a>
              ) : null{"}"} */{"}"}
            </div>
            {"{"}/*{" "}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>{" "}
            */{"}"}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
