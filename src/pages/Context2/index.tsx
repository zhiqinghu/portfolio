import React from "react";
import Context from "../../components/Context";
import "./scss/index.scss";

export interface Context2Props {}

const Context2: React.FC<Context2Props> = () => {
  const srcs = [
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project2/1.jpg?raw=true",
      hasContent_left: true,
      hasContent_right: false,
      key: 1,
      title: "Class: ARC 367 instructor: Mason White",
      instructor: " Collabration with: Tamara Cruz, Rawish Talpur",
      content:
        "The project exploring the connection between the community and architecture landscape design of El Ruedo. With plan, section and isometric drawing, the project demonstarted the community and architecture.",
    },

    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project2/2.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 2,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project2/3.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 3,
      title: "",
      instructor: "",
      content: "",
    },
  ];
  const title = "Culture and  Community-El Ruedo";
  const content =
    "The project exploring the culture and community of El Ruedo as a residental architecture and landscape." +
    " It exploring the activity and community of the space with the site context." +
    " It is being worked as group project studying and exploring the space with isometric, plan and section drawings.";
  return <Context srcs={srcs} content={content} title={title} />;
};

export default Context2;
