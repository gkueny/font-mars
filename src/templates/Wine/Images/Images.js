import React from "react";
import Image from "gatsby-image";

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
      <Image
        className="h-full"
        style={{
          width: "35%",
          left: "65%",
          top: "1px",
          maxHeight: "998px",
        }}
        fluid={background.childImageSharp.fluid}
      ></Image>
      <Image
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
        fixed={bottle.childImageSharp.fixed}
      ></Image>
    </>
  );
};

export default Images;
