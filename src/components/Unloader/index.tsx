import React from "react";
import "./scss/index.scss";

export interface UnloaderProps {}

const Unloader: React.FC<UnloaderProps> = () => {
  return (
    <div className="unloader">
      <p>IMG FAILED TO LOAD ...</p>
    </div>
  );
};

export default Unloader;
