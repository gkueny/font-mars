import React from "react";
import Image from "gatsby-image";

const Hero = ({ image, alt, children, type }) => {
  const classNames =
    "flex justify-center items-center relative h-screen-adapt shadow-bottom";
  const classNamesType2 =
    "absolute flex justify-center items-center h-screen-adapt-2 p-6 w-full";

  const classNamesImages = "h-full w-full";
  const classNamesImagesType2 = "h-full w-full rounded-lg shadow-lg";

  return (
    <>
      {type === "2" && (
        <div
          className="bg-gray-200"
          style={{
            height: "calc(50vh - 101px)",
            marginBottom: "min(35vh, 600px)",
            minHeight: "calc(250px + 6rem)",
            maxHeight: "500px",
          }}
        ></div>
      )}
      <div
        className={type === "2" ? classNamesType2 : classNames}
        style={
          type === "2"
            ? {
                top: "3rem",
                height: "calc(90vh - 101px -  6rem)",
                minHeight: "500px",
                maxHeight: "1000px",
              }
            : {}
        }
      >
        <Image
          className={type === "2" ? classNamesImagesType2 : classNamesImages}
          fluid={image.childImageSharp.fluid}
          alt={alt}
        ></Image>
        {type !== "2" && (
          <div className="absolute top-0 h-full w-full bg-gray-800-alpha"></div>
        )}
        {children}
      </div>
    </>
  );
};
export default Hero;
