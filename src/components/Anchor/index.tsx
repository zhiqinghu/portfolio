import React from "react";
import "./scss/index.scss";
import { ReactComponent as AnchorLogo } from "./anchor.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

export interface AnchorProps {}

const Anchor: React.FC<AnchorProps> = () => {
  return (
    <BrowserRouter>
      <HashLink to="#top">
        <div className="footer-anchor">
          <AnchorLogo />
        </div>
      </HashLink>
    </BrowserRouter>
  );
};

export default Anchor;
