import React from "react";
import { navigateTo } from "gatsby";
import Image from "gatsby-image";

const Wine = ({ wine }) => {
  return (
    <div
      role="link"
      onClick={() => navigateTo(wine.fields.slug)}
      className="max-w-sm overflow-hidden px-6 w-1/3 cursor-pointer"
    >
      <div className="rounded shadow-md mb-16 hover:shadow-xl">
        <Image
          className="w-full h-64 rounded-t"
          fluid={wine.frontmatter.image.childImageSharp.fluid}
        ></Image>
        <div className="px-6 py-4 h-48">
          <h3 className="font-bold text-xl mb-2">{wine.frontmatter.title}</h3>
          <div className="text-gray-700 text-base">
            {wine.frontmatter.gamme && <p>Gamme : {wine.frontmatter.gamme}</p>}
            {wine.frontmatter.appellation && (
              <p>Appellation : {wine.frontmatter.appellation}</p>
            )}
            <p>{wine.frontmatter.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wine;
