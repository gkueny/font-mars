import React from "react";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Wine = ({ wine }) => {
  return (
    <div
      role="link"
      onClick={() => navigate(wine.fields.slug)}
      className="max-w-sm overflow-hidden px-6 w-full cursor-pointer"
    >
      <div className="rounded shadow mb-16 hover:shadow-lg">
        <GatsbyImage
          image={wine.frontmatter.image.childImageSharp.gatsbyImageData}
          className="w-full rounded-t"
          style={{ height: "25rem" }}
        ></GatsbyImage>
        <div className="px-6 py-4 text-center">
          <h3 className="font-bold text-xl mb-2">{wine.frontmatter.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Wine;
