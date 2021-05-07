import React from "react";
import Context from "../../components/Context";
import ContextImage from "../../components/ContextImage";
import "./scss/index.scss";

export interface Context1Props {}

const Context1: React.FC<Context1Props> = () => {
  const srcs = [
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/1.jpg",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/2.jpg",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/3.jpg",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/4.jpg",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/5.jpg",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/6.jpg",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/7.jpg",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/8.jpg",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/cover.jpg",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/10.jpg",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/11.jpg",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/12.jpg",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/13.jpg",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/14.jpg",
  ];
  const title = "Continuous Space";
  const content =
    "This project had been seeking for the relation between vertical plan, horizontal plan and spaces through the exploration of three parts. Continuous space is a theme in the pursuing of the connection and conceptual ideas of the space. Overall, it is seeking the beauty of archicture, space and lights and powerfulness of the traditional way in demonstar tion of spaces.";
  return <Context srcs={srcs} content={content} title={title} />;
};

export default Context1;
