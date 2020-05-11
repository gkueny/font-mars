import React from "react";
import { navigateTo } from "gatsby";
import Image from "gatsby-image";

const Wine = ({ wine }) => {
  return (
    <div
      role="link"
      onClick={() => navigateTo(wine.fields.slug)}
      className="max-w-sm overflow-hidden px-6 w-full cursor-pointer"
    >
      <div className="rounded shadow mb-16 hover:shadow-lg">
        <Image
          className="w-full rounded-t"
          style={{ height: "25rem" }}
          fluid={wine.frontmatter.image.childImageSharp.fluid}
        ></Image>
        <div className="px-6 py-4 text-center">
          <h3 className="font-bold text-xl mb-2">{wine.frontmatter.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Wine;
