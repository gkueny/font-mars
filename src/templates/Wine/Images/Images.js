import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Images = ({ background, bottle }) => {
  return (
    <>
      <div
        className="absolute h-full"
        style={{
          width: "35%",
          left: "65%",
          background: "rgba(0, 0, 0, 0.25)",
        }}
      ></div>
      <GatsbyImage
        image={background.childImageSharp.gatsbyImageData}
        className="h-full"
        style={{
          width: "35%",
          left: "65%",
          top: "1px",
          maxHeight: "998px",
        }}
      ></GatsbyImage>
      <GatsbyImage
        image={bottle.childImageSharp.gatsbyImageData}
        style={{
          left: "calc(35% + 2vw)",
          height: "100%",
          maxHeight: "998px",
        }}
        imgStyle={{
          width: "300px",
          height: "calc(100% + 200px)",
          objectFit: "contain",
          zIndex: 10,
        }}
      ></GatsbyImage>
    </>
  );
};

export default Images;
