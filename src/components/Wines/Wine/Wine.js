import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Wine = ({ wine, lang = "fr" }) => {
  return (
    <div className="max-w-sm px-6 w-full">
      <Link
        to={wine.frontmatter.slug}
        className="block rounded shadow mb-16 hover:shadow-lg transition-shadow cursor-pointer"
      >
        <GatsbyImage
          image={wine.frontmatter.image.childImageSharp.gatsbyImageData}
          className="w-full rounded-t"
          style={{ height: "25rem" }}
          alt={wine.frontmatter.title}
        />
        <div className="px-6 py-4 text-center">
          <h3 className="font-bold text-xl mb-2">{wine.frontmatter.title}</h3>
          {wine.frontmatter.outOfStock && (
            <span className="inline-block bg-red-50 rounded-full px-3 py-1 text-md font-bold text-red-800 mr-2 mb-2">
              {lang === "fr" ? "épuisé" : "Out of stock"}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Wine;
