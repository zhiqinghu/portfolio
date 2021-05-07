import React from "react";
import { useImage } from "react-image";

export interface ContextImageProps {
  imgSrc: string;
}

const ContextImage: React.FC<ContextImageProps> = ({ imgSrc }) => {
  const { src } = useImage({
    srcList: imgSrc,
  });

  return <img src={src} alt="img" />;
};

export default ContextImage;
