import React from "react";
import Context from "../../components/Context";
import "./scss/index.scss";

export interface Context2Props {}

const Context2: React.FC<Context2Props> = () => {
  const srcs = [
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project2/1.jpg?raw=true",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project2/2.jpg?raw=true",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project2/3.jpg?raw=true",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project2/cover.jpg?raw=true",
  ];
  const title = "Culture and  Community-El Ruedo";
  const content =
    "The project exploring the culture and community of El Ruedo as a residental architecture and landscape. It exploring the activity and community of the space with the site context. It is being worked as group project studying and exploring the space with isometric, plan and section drawings.This project had been seeking for the relation between vertical plan, horizontal plan and spaces through the exploration of three parts. Continuous space is a theme in the pursuing of the connection and conceptual ideas of the space. Overall, it is seeking the beauty of archicture, space and lights and powerfulness of the traditional way in demonstar tion of spaces.";
  return <Context srcs={srcs} content={content} title={title} />;
};

export default Context2;