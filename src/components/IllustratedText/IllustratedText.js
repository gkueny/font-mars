import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import useWindowSize from "../../hooks/useWindowSize";

const MOBILE_MAX_WIDTH = 1024;

const Illustration = ({ imgFluid, inverted, isMobile }) => (
  <div
    className={`w-full lg:h-full ${inverted ? "lg:-ml-6" : "lg:-mr-6"}`}
    style={{
      width: !isMobile && "calc(40% + 1.5rem)",
      height: isMobile && "20rem",
    }}
  >
    <GatsbyImage
      image={imgFluid}
      className="h-full w-full shadow-md rounded-md"
    ></GatsbyImage>
  </div>
);

const Text = ({ children, inverted, isMobile }) => (
  <div
    className={`bg-white rounded-xl shadow-lg p-4 z-10 -mt-64 lg:p-12 lg:mt-0  ${
      inverted ? "lg:-mr-6" : "lg:-ml-6"
    }`}
    style={{
      width: isMobile ? "calc(100% - 2rem)" : "calc(60% + 1.5rem)",
    }}
  >
    {children}
  </div>
);

const IllustratedText = ({
  children,
  imgFluid,
  inverted = false,
  height = 650,
  background = null,
}) => {
  const { width } = useWindowSize();
  const IS_MOBILE = width < MOBILE_MAX_WIDTH;

  return (
    <>
      {!IS_MOBILE && (
        <div
          className="absolute bg-gray-100 z-0"
          style={{
            width: inverted ? "30%" : "70%",
            height: `${height}px`,
            left: inverted ? "70%" : "0",
          }}
        ></div>
      )}
      <section
        className="relative max-w-screen-xl m-auto px-1 z-10 flex items-center h-auto py-12 lg:px-12 lg:py-12 w-full"
        style={{
          height: !IS_MOBILE && `${height}px`,
        }}
      >
        <article className="flex items-center flex-col h-full lg:flex-row lg:m-12 w-full">
          {inverted && !IS_MOBILE && (
            <Text isMobile={IS_MOBILE} inverted={inverted}>
              {children}
            </Text>
          )}
          {background ? (
            background
          ) : (
            <Illustration
              isMobile={IS_MOBILE}
              imgFluid={imgFluid}
              inverted={inverted}
            />
          )}

          {(!inverted || IS_MOBILE) && (
            <Text isMobile={IS_MOBILE} inverted={inverted}>
              {children}
            </Text>
          )}
        </article>
      </section>
    </>
  );
};

export { Text };

export default IllustratedText;
