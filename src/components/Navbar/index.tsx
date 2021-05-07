import React from "react";
import Media from "react-media";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import NavContainer from "./NavContainer";
import "./scss/index.scss";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="nav-header">
      <Media query="(max-width: 770px)" render={() => <Hamburger />} />
      <NavContainer />
      <div className="name">
        <h1>
          <Link to="/">Zhiqing Hu</Link>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
