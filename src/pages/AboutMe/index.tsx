import React from "react";
import "./scss/index.scss";

export interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className="about_me">
      <div className="photo_container">
        <img src="/assets/me.jpg" alt="me" />
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
