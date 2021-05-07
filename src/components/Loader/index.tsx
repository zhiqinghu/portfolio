import React from "react";
import "./scss/index.scss";

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="loader">
      <p>IMG IS LOADING...</p>
    </div>
  );
};

export default Loader;
