import React from "react";
import Context from "../../components/Context";
import "./scss/index.scss";

export interface Context4Props {}

const Context4: React.FC<Context4Props> = () => {
  const srcs = [
    "./assets/project4/1.jpg",
    "./assets/project4/cover.png",
    "./assets/project4/3.jpg",
    "./assets/project4/4.png",
    "./assets/project4/5.png",
    "./assets/project4/6.jpg",
    "./assets/project4/7.jpg",
    "./assets/project4/8.png",
  ];
  const title = "Office Space";
  const content =
    "The project used the office buiding as the subject of the exploration between sapce and landscape. It is interacting between architecture model in technical term and digital photos. project had been seeking for the relation between vertical plan, horizontal plan and spaces through the exploration of three parts. Continuous space is a theme in the pursuing of the connection and conceptual ideas of the space. Overall, it is seeking the beauty of archicture, space and lights and powerfulness of the traditional way in demonstar tion of spaces.";
  return <Context srcs={srcs} content={content} title={title} />;
};

export default Context4;
