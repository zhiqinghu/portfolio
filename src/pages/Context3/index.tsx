import React from "react";
import Context from "../../components/Context";
import "./scss/index.scss";

export interface Context3Props {}

const Context3: React.FC<Context3Props> = () => {
  const srcs = [
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/1.jpg?raw=true",
      hasContent_left: true,
      hasContent_right: false,
      key: 1,
      title: "Class: ARC 465" + "instructor: Andrew Bako",
      instructor: "Collabration with: Tiffany Alizadeh, Romina Feili",
      content:
        "The project used the technology ideas and digital 3-D model making to created the space of the ideological urbanism of the setting of the futurial media and exploring the VR glasses." +
        " The advancement in technology in this project has replaced many of our traditional forms of hobbies, entertainments, and even unrealistic experiences. Over time, affinity with the virtual world has created a substratum upon which Media is able to become pretty new.",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/2.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 2,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/3.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 3,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/cover.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 4,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/5.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 5,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/6.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 6,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/7.jpg?raw=true",
      hasContent_left: true,
      hasContent_right: false,
      key: 7,
      title: "",
      instructor:
        "The project are demonstrated as animation to show the connection between space and technology." +
        " It is creating a space of the future and the connection between VR glass and the story of the technological experiences.The object of the motion within the space, which involves the brushes, games bar and the VR glasses created the new world of technology within the space.",

      content:
        "This dynamic conceptualization of a virtual reality plays a role as a narrative that serves for the thought that precedes it." +
        " Being able to produce our on content due to this newfound flexibility and our ability to customize our chosen setting, our commitment to bridge the gap between our differences in media further motivates us to create a space in which we can narrate, experience, and choose the storyline of our own experience.",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/8.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 8,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/9.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 9,
      title: "",
      instructor: "",
      content: "",
    },
    {
      url:
        "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/10.jpg?raw=true",
      hasContent_left: false,
      hasContent_right: false,
      key: 10,
      title: "",
      instructor: "",
      content: "",
    },
  ];
  const title = "Why In Person";
  const content = `
  “Cybernetics is the alchemy of our age: the computer is the universal
  solvent into which all difference of media dissolved into a pulsing stream
  of bits and bytes.”    - Paul Lunenfeld`;
  return <Context srcs={srcs} content={content} title={title} />;
};

export default Context3;
