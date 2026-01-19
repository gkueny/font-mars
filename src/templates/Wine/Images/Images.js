import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Images = ({ background, bottle }) => {
  if (!bottle || !background) {
    return null;
  }

  return (
    <div className="relative w-full h-full" style={{ overflow: "visible" }}>
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0, 0, 0, 0.25)",
        }}
      />

      {/* Background image */}
      <GatsbyImage
        image={background.childImageSharp.gatsbyImageData}
        className="w-full h-full"
        style={{
          position: "absolute",
          inset: 0,
        }}
        imgStyle={{
          objectFit: "cover",
        }}
        alt=""
      />

      {/* Left triangle - diagonal from top-left to bottom-right */}
      <div
        className="absolute z-10"
        style={{
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "100vh 12vw 0 0",
          borderColor: "#ffffff transparent transparent transparent",
          transform: "translateX(-100%)",
        }}
      />

      {/* Right triangle - diagonal from top-right to bottom-left */}
      <div
        className="absolute z-10"
        style={{
          right: 0,
          top: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 0 100vh 12vw",
          borderColor: "transparent transparent #ffffff transparent",
        }}
      />

      {/* Bottle image */}
      <GatsbyImage
        image={bottle.childImageSharp.gatsbyImageData}
        className="absolute z-20"
        style={{
          left: "-6vw",
          top: "50%",
          transform: "translateY(-50%)",
          height: "85%",
        }}
        imgStyle={{
          objectFit: "contain",
        }}
        alt=""
      />
    </div>
  );
};

export default Images;
