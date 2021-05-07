import React from "react";
import { Link } from "react-router-dom";
import "./scss/index.scss";

export interface NavContainerProps {}

const NavContainer: React.FC<NavContainerProps> = () => {
  return (
    <nav className="nav-container">
      <div className="page-title">
        <Link to="/">Portfolio</Link>
      </div>
      <div className="page-title">
        <Link to="/about">about me</Link>
      </div>
    </nav>
  );
};

export default NavContainer;
