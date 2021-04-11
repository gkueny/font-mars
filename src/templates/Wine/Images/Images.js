import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Images = ({ background, bottle }) => {
  if (!bottle || !background) {
    return null;
  }

  return (
    <>
      <div
        className="h-full hidden absolute lg:block"
        style={{
          width: "35%",
          left: "65%",
          background: "rgba(0, 0, 0, 0.25)",
        }}
      ></div>
      <GatsbyImage
        image={background.childImageSharp.gatsbyImageData}
        className="h-full hidden lg:block"
        style={{
          width: "35%",
          left: "65%",
          top: "1px",
          maxHeight: "998px",
        }}
        alt=""
      ></GatsbyImage>
      {
        <GatsbyImage
          className="hidden lg:block"
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
          alt=""
        ></GatsbyImage>
      }
    </>
  );
};

export default Images;
