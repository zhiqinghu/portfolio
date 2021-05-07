import React, { Suspense } from "react";
import { Img } from "react-image";
import { Link, RouteProps } from "react-router-dom";
import Loader from "../../components/Loader";
import Unloader from "../../components/Unloader";
import "./scss/index.scss";

export type PortfolioProps = RouteProps;

const Portfolio: React.FC<RouteProps> = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio">
        <Link to="/continuous-space">
          <Img
            src={
              "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/cover.jpg?raw=true"
            }
            alt="continuous-space"
            loader={<Loader />}
            unloader={<Unloader />}
          />
          <p>Continuous Space</p>
        </Link>
      </div>
      <div className="portfolio">
        <Link to="/culture-community">
          <Img
            src={
              "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project2/cover.jpg?raw=true"
            }
            alt="culture-community"
            loader={<Loader />}
            unloader={<Unloader />}
          />
          <p>Culture and Community-El Ruedo</p>
        </Link>
      </div>
      <div className="portfolio">
        <Link to="/why-in-person">
          <Img
            src={
              "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/cover.jpg?raw=true"
            }
            alt="why-in-person"
            loader={<Loader />}
            unloader={<Unloader />}
          />
          <p>Why In Person</p>
        </Link>
      </div>
      <div className="portfolio">
        <Link to="/office-space">
          <Suspense fallback={"IMG IS LOADING"}>
            <Img
              src={
                "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project4/cover.png?raw=true"
              }
              alt="office-space"
              loader={<Loader />}
              unloader={<Unloader />}
            />
            <p>Office Space</p>
          </Suspense>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
