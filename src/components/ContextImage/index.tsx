import React from "react";
import { Img } from "react-image";
import Loader from "../Loader";

export interface ContextImageProps {
  src: string;
}

const ContextImage: React.FC<ContextImageProps> = ({ src }) => (
  <Img src={src} loader={<Loader />} />
);

export default ContextImage;
