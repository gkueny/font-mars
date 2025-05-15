import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Illustration = ({ imgFluid, inverted, className = "" }) => (
  <div
    className={`illustratedtext-illustration ${className} ${
      inverted ? "lg:-ml-6" : "lg:-mr-6"
    }`}
  >
    <GatsbyImage
      image={imgFluid}
      className="h-full w-full shadow-md rounded-md"
      objectFit="contain"
      alt=""
    ></GatsbyImage>
  </div>
);

const Text = ({
  children,
  inverted,
  displayOnlyOnDesktop = false,
  hideOnDesktop = false,
  className = "",
}) => (
  <div
    className={`illustratedtext-text bg-white rounded-xl shadow-lg p-4 z-10 -mt-16 lg:p-12 lg:mt-0  ${className} ${
      inverted ? "lg:-mr-6" : "lg:-ml-6"
    } ${displayOnlyOnDesktop ? "hidden lg:block" : ""} ${
      hideOnDesktop ? "lg:hidden" : ""
    }`}
  >
    {children}
  </div>
);

const IllustratedText = ({
  children,
  imgFluid,
  inverted = false,
  background = null,
  illustrationClassName = "",
  textClassName = "",
}) => {
  return (
    <>
      <div
        className="absolute bg-gray-100 z-0 hidden lg:block illustrated-heigth"
        style={{
          width: inverted ? "30%" : "70%",
          left: inverted ? "70%" : "0",
        }}
      ></div>
      <section className="relative max-w-screen-xl m-auto px-1 z-10 flex items-center py-12 lg:px-12 lg:py-12 w-full illustrated-heigth-desktop">
        <article className="flex items-center flex-col h-full lg:flex-row lg:m-12 w-full">
          {inverted && (
            <Text inverted={inverted} displayOnlyOnDesktop>
              {children}
            </Text>
          )}
          {background ? (
            background
          ) : (
            <Illustration
              imgFluid={imgFluid}
              inverted={inverted}
              className={illustrationClassName}
            />
          )}

          <Text
            inverted={inverted}
            hideOnDesktop={inverted}
            className={textClassName}
          >
            {children}
          </Text>
        </article>
      </section>
    </>
  );
};

export { Text };

export default IllustratedText;
