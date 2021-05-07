import React from "react";
import Context from "../../components/Context";
import "./scss/index.scss";

export interface Context3Props {}

const Context3: React.FC<Context3Props> = () => {
  const srcs = [
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/1.jpg?raw=true",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/2.jpg?raw=true",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/3.jpg?raw=true",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/cover.jpg?raw=true",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/5.jpg?raw=true",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/6.jpg?raw=true",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/7.jpg?raw=true",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/8.jpg?raw=true",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/9.jpg?raw=true",
    "https://github.com/zhiqinghu/portfolio/blob/master/public/assets/project3/10.jpg?raw=true",
  ];
  const title = "Why In Person";
  const content =
    "“Cybernetics is the alchemy of our age: the computer is the universal solvent into which all difference of media dissolved into a pulsing stream of bits and bytes.”";
  return <Context srcs={srcs} content={content} title={title} />;
};

export default Context3;
