import React from "react";
import Image from "gatsby-image";

const Hero = ({ image, alt, children }) => {
  return (
    <div className="flex justify-center items-center relative h-screen-adapt shadow-bottom">
      <Image
        className="h-full w-full"
        fluid={image.childImageSharp.fluid}
        alt={alt}
      ></Image>
      <div className="absolute top-0 h-full w-full bg-gray-800-alpha"></div>
      {children}
    </div>
  );
};
export default Hero;
