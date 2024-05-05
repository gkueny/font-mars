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
  hasImages,
  outOfStock,
  lang,
}) => {
  return (
    <div className="h-full bg-white absolute z-10 mt-4 lg:mt-0 lg:pt-12 lg:pl-12 lg:pt-4 description">
      <span className="hidden lg:inline">
        <Title title={title} />
      </span>

      {outOfStock && (
        <span class="inline-block bg-red-50 rounded-full px-3 py-1 text-md font-bold text-red-800 mr-2 mb-2">
          {lang === "fr" ? "épuisé" : "Out of stock"}
        </span>
      )}

      {mobileBackground && (
        <>
          <div
            className="absolute z-10  items-center justify-center text-center rounded-lg flex lg:hidden"
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
            className="h-full w-full shadow-2xl rounded-lg block lg:hidden"
            style={{ height: "50%", left: "1rem", width: "calc(100% - 2rem)" }}
            alt=""
          />
        </>
      )}
      {mobileBackground && (
        <span className="inline lg:hidden">
          <Title title={title} />
        </span>
      )}

      <div className="blovk lg:hidden">
        <Commentary commentary={commentary} lang={lang} />
      </div>

      <div className="px-12 pt-12 pb-12 bg-white -mt-24 mb-12 lg:m-0 lg:p-0 lg:pb-6">
        <Markdown source={description} escapeHtml={false} />
        <div className="hidden lg:block">
          <Commentary commentary={commentary} lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default Description;
