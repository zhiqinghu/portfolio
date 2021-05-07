import React from "react";
import { Img } from "react-image";
import { Link, RouteProps } from "react-router-dom";
import "./scss/index.scss";

export type PortfolioProps = RouteProps;

const Portfolio: React.FC<RouteProps> = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio">
        <Link to="/continuous-space">
          <Img src={"/assets/project1/cover.jpg"} alt="design" />
          <p>Continuous Space</p>
        </Link>
      </div>
      <div className="portfolio">
        <Link to="/culture-community">
          <Img src={"/assets/project2/cover.jpg"} alt="design" />
          <p>Culture and Community-El Ruedo</p>
        </Link>
      </div>
      <div className="portfolio">
        <Link to="/why-in-person">
          <Img src={"/assets/project3/cover.jpg"} alt="design" />
          <p>Why In Person</p>
        </Link>
      </div>
      <div className="portfolio">
        <Link to="/office-space">
          <Img src={"/assets/project4/cover.png"} alt="design" />
          <p>Office Space</p>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
