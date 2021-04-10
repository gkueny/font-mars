import React from "react";
import Markdown from "../../../components/Markdown";
import Commentary from "../../../components/Commentary";
import { GatsbyImage } from "gatsby-plugin-image";

const Title = ({ title }) => (
  <h2
    className="text-2xl font-bold mb-6 text-white md:text-6xl lg:text-gray-900"
    style={{
      lineHeight: "4rem",
    }}
  >
    {title}
  </h2>
);

const Description = ({
  title,
  description,
  commentary,
  mobileBackground,
  isMobile,
  isDesktop,
}) => {
  return (
    <div
      className="h-full bg-white absolute z-10 mt-4 lg:mt-0 lg:pt-12 lg:pl-12 lg:pt-4"
      style={{
        width: isMobile ? "100%" : "65%",
      }}
    >
      {isDesktop && <Title title={title} />}

      {isMobile && (
        <>
          <div
            className="absolute z-10 flex items-center justify-center text-center rounded-lg"
            style={{
              background: "rgba(0, 0, 0, 0.25)",
              height: "50%",
              left: "1rem",
              width: "calc(100% - 2rem)",
            }}
          >
            <Title title={title} />
          </div>
          <GatsbyImage
            image={mobileBackground.childImageSharp.gatsbyImageData}
            className="h-full w-full shadow-2xl rounded-lg"
            style={{ height: "50%", left: "1rem", width: "calc(100% - 2rem)" }}
            alt=""
          />
        </>
      )}

      {isMobile && <Commentary commentary={commentary} />}

      <div className="px-12 pt-12 bg-white -mt-24 mb-12 lg:my-0 lg:p-0">
        <Markdown source={description} escapeHtml={false} />
        {isDesktop && <Commentary commentary={commentary} />}
      </div>
    </div>
  );
};

export default Description;
