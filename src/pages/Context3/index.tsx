import React from "react";
import Context from "../../components/Context";
import "./scss/index.scss";

export interface Context3Props {}

const Context3: React.FC<Context3Props> = () => {
  const srcs = [
    "/assets/project3/1.jpg",
    "/assets/project3/2.jpg",
    "/assets/project3/3.jpg",
    "/assets/project3/cover.jpg",
    "/assets/project3/5.jpg",
    "/assets/project3/6.jpg",
    "/assets/project3/7.jpg",
    "/assets/project3/8.jpg",
    "/assets/project3/9.jpg",
    "/assets/project3/10.jpg",
  ];
  const title = "Why In Person";
  const content =
    "“Cybernetics is the alchemy of our age: the computer is the universal solvent into which all difference of media dissolved into a pulsing stream of bits and bytes.”";
  return <Context srcs={srcs} content={content} title={title} />;
};

export default Context3;
