import React from "react";
import { Img } from "react-image";
import Loader from "../../components/Loader";
import Unloader from "../../components/Unloader";
import "./scss/index.scss";

export interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className="about_me">
      <div className="photo_container">
        <Img
          src="https://github.com/zhiqinghu/portfolio/blob/master/public/assets/me.jpg?raw=true"
          alt="me"
          loader={<Loader />}
          unloader={<Unloader />}
        />
      </div>

      <p>
        My name is Zhiqing Hu. I have moved from China to Canada when I was 13.
        I have completed my undergraduate degree at University of Toronto's
        Daniels Faculty of Architecture after graduating from high school in
        oakville. I am skilled in the understanding and uses of the revit,
        rhino, photoshop, illustrator, solidworks and auto-CAD, and also
        familiar with the physical and digital modelling and drafting. It is
        interesting to me of the interation between the modeled space and the
        site in architecture.
      </p>
    </div>
  );
};

export default AboutMe;
