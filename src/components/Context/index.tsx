import React from "react";
import ContextImage from "../ContextImage";
import "./scss/index.scss";

export interface ContextProps {
  srcs: string[];
  title: string;
  content: string;
}

const Context: React.FC<ContextProps> = ({ srcs, title, content }) => {
  return (
    <div className="context">
      <h1>{title}</h1>
      <p>{content}</p>
      <div className="context_container">
        {srcs.map((src) => {
          return <ContextImage src={src} />;
        })}
      </div>
    </div>
  );
};

export default Context;
