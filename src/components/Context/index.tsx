import React, { Suspense } from "react";
import ContextImage from "../ContextImage";
import "./scss/index.scss";

type srcsType = {
  url: string;
  hasContent_left: boolean;
  hasContent_right: boolean;
  key: number;
  title: string;
  instructor: string;
  content: string;
};

export interface ContextProps {
  srcs: srcsType[];
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
          return (
            <React.Fragment key={src.key}>
              {src.hasContent_left && (
                <span className="content_container">
                  <span className="content_title">{src.title}</span>
                  <span className="content_instructor">{src.instructor}</span>
                  <span className="content_content">{src.content}</span>
                </span>
              )}

              {src.hasContent_right ? (
                src.hasContent_left ? (
                  <div className="content-half_left">
                    <Suspense fallback={"IMG IS LOADING"}>
                      <ContextImage imgSrc={src.url} />
                    </Suspense>
                  </div>
                ) : (
                  <div className="content-half_right">
                    <Suspense fallback={"IMG IS LOADING"}>
                      <ContextImage imgSrc={src.url} />
                    </Suspense>
                  </div>
                )
              ) : (
                <Suspense fallback={"IMG IS LOADING"}>
                  <ContextImage imgSrc={src.url} />
                </Suspense>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Context;
