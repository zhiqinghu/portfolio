import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./scss/index.scss";

export interface HamburgerProps {}

const Hamburger: React.FC<HamburgerProps> = () => {
  const [checked, setChecked] = useState(false);
  const handleClose = () => {
    setChecked(false);
  };
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" checked={checked} onChange={handleChange} />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu" onClick={handleClose}>
          <Link to="/">
            <li>Portfolio</li>
          </Link>
          <Link to="/about_me">
            <li>About me</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Hamburger;
