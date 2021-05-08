import React from "react";
import Context from "../../components/Context";
import "./scss/index.scss";

export interface Context4Props {}

const Context4: React.FC<Context4Props> = () => {
  const srcs = [
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project4/1.png?raw=true",
      hasContent_left: true,
      hasContent_right: false,
      key: 1,
      title: "",
      instructor: "",
      content:
        "The project designed as an architectural space of the office building." +
        " It is exploring the composition and geometric ideas of the architure, which also seeking to demonstrated the lights and the effect of industrialization fo the space.",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project4/2.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 2,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project4/3.jpg?raw=true",
      hasContent_left: true,
      hasContent_right: false,
      key: 3,
      title: "Site contexts and Rendering",
      instructor: "",
      content:
        "The site context and the illustarted image from Rhino and Revit demonstarting the interaction between space and world...It is connecting between site and landscape architecture." +
        "It is processing through Rhino V-ray, Photoshop and illustrator.",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project4/4.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: true,
      key: 4,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project4/5.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: true,
      key: 5,
      title: "",
      instructor: "",
      content: "",
    },
  ];
  const title = "Office Space";
  const content =
    "The project used the office buiding as the subject of the exploration between sapce and landscape." +
    " It is interacting between architecture model in technical term and digital photos.";

  return <Context srcs={srcs} content={content} title={title} />;
};

export default Context4;
