import React from "react";
import Context from "../../components/Context";
import "./scss/index.scss";

export interface Context1Props {}

const Context1: React.FC<Context1Props> = () => {
  const srcs = [
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/1.jpg?raw=true",
      hasContent_left: true,
      hasContent_right: false,
      key: 1,
      title: "Design in Vertical Plan ",
      instructor: "Class: ARC 201 Instructor: Brian O'Brian",
      content:
        "The project is exploring the relation between the plan and design elements using only vertical elements." +
        " The project is designed in the space of 16m X 16m with the height of 12m with to create at least 7 spaces." +
        " It is involving a various of the exploring of the vertical surface and invovled with use of the two layers of equilateral triangles connected and interacted to created the 8 spaces." +
        " With the creation of clear boudariesbetween space and vertical surface, it shows the powerfulness of the light and shadow in architectural space." +
        " The column interact with the model but has no connections with model.",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/2.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 2,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/3.jpg?raw=true",
      hasContent_left: true,
      hasContent_right: false,
      key: 3,
      title: "Design in Horizontal Plan",
      instructor: "Class: ARC 201 Instructor: Brian O'Brian",
      content:
        "The project contents the idea of the continuous through the continuity of the space, walkway and continity of the plan as relating to vertical space." +
        " The idea of the continuous is archieved through the use of ramp and stairs in the project." +
        " The idea of the continuous and connection is use as the transformation between two seperate part of the project." +
        " The design had no connection between two as the placement and interact connects two part as one model." +
        " Demonstration of the project are created with the hand dra􀅌ing of the plans, sections and the physical model making of the model." +
        " It represeting the spatial interconnection of the space and horizontal plan formed the spatial continuous.",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/4.jpg?raw=true",
      hasContent_left: true,
      hasContent_right: true,
      key: 4,
      title: "",
      instructor: "",
      content:
        `The project continued from the previous of "design in verticle plan".` +
        " It is exploring the relation between plans and connects between space using only vertical elements." +
        " The second assignment is experiencing and exploring the interconnect between the horizontal plan, ramp and stairs... " +
        " It is being design at the space of 8m X 16m with the on ground height of 12m and underground height of 8m without the specific site assigned to the project.",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/5.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: true,
      key: 5,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/6.JPG?raw=true",
      hasContent_left: false,
      hasContent_right: true,
      key: 6,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/7.JPG?raw=true",
      hasContent_left: false,
      hasContent_right: true,
      key: 7,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/8.JPG?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 8,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/cover.jpg?raw=true",
      hasContent_left: true,
      hasContent_right: false,
      key: 9,
      title: "Design in Volumn",
      instructor: "Class: ARC 201 Instructor: Brian O'Brian",
      content:
        "The thrid project of the course is exploring the design of the site which is surround by worthwood college, innis college and varsity center to combining the idea of horizontal and vertical plan to exploring the idea of voulumn." +
        " However, through the analysis of site, there has been an interesting relations appeared between the site and the varsity center." +
        " The project is used the location of the site, as the project designed to create a space as a auditorium to watch the sports games across the street." +
        " However, the project can be sp;it into two part, as analysis in the previous project." +
        " Half of project has creating of the horizontal plans as the space of the auditorium and stairs to connect the other part." +
        " The other part of the sapce is created by the vertical plan of equilateral triangles." +
        " They created a partically closed space with the plan of the part and glasses." +
        " It created a space of togethering and auditorium as the use of glasses.",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/10.JPG?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 10,
      title: "",
      instructor: " ",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/11.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: true,
      key: 11,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/12.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: true,
      key: 12,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/13.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: true,
      key: 13,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project1/14.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: true,
      key: 14,
      title: "",
      instructor: "",
      content: "",
    },
  ];
  const title = "Continuous Space";
  const content =
    "This project had been seeking for the relation between vertical plan, horizontal plan and spaces through the exploration of three parts. Continuous space is a theme in the pursuing of the connection and conceptual ideas of the space. Overall, it is seeking the beauty of archicture, space and lights and powerfulness of the traditional way in demonstar tion of spaces.";
  return <Context srcs={srcs} content={content} title={title} />;
};

export default Context1;
