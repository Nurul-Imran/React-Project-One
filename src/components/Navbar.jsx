import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#">menu</a>
            </li>
            <li>
              <a href="#">location</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
        <div className="login">
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
