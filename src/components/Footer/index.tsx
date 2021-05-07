import React from "react";
import "./scss/index.scss";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return <div className="footer-text">Zhiqing Hu @ 2021</div>;
};

export default Footer;
