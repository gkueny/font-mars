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
  outOfStock,
  lang,
}) => {
  return (
    <div className="bg-white description">
      {/* Desktop title */}
      <span className="hidden lg:inline">
        <Title title={title} />
      </span>

      {outOfStock && (
        <span className="inline-block bg-red-50 rounded-full px-3 py-1 text-md font-bold text-red-800 mr-2 mb-2">
          {lang === "fr" ? "épuisé" : "Out of stock"}
        </span>
      )}

      {/* Mobile: image with title overlay */}
      {mobileBackground && (
        <div className="relative lg:hidden mx-4 mb-4">
          <div
            className="absolute inset-0 z-10 flex items-center justify-center text-center rounded-lg"
            style={{
              background: "rgba(0, 0, 0, 0.25)",
            }}
          >
            <Title title={title} />
          </div>
          <GatsbyImage
            image={mobileBackground.childImageSharp.gatsbyImageData}
            className="w-full shadow-2xl rounded-lg"
            style={{ height: "300px" }}
            alt=""
          />
        </div>
      )}

      {/* Mobile: commentary */}
      <div className="block lg:hidden px-4">
        <Commentary commentary={commentary} lang={lang} />
      </div>

      {/* Description content */}
      <div className="px-4 py-6 lg:px-0 lg:py-0 lg:pb-6 bg-white">
        <Markdown source={description} escapeHtml={false} />
        {/* Desktop: commentary */}
        <div className="hidden lg:block">
          <Commentary commentary={commentary} lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default Description;
