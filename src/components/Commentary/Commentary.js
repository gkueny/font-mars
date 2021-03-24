import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Commentary = ({ commentary }) => {
  const data = useStaticQuery(graphql`
    query CommentaryQuery {
      avatar: file(absolutePath: { regex: "/jean-baptiste.jpg/" }) {
        childImageSharp {
          gatsbyImageData(width: 80, height: 80, layout: FIXED)
        }
      }
    }
  `);

  return (
    <section className="relative m-auto z-30 max-w-lg px-8 lg:px-0 lg:m-0">
      <div className="py-4 px-8 bg-white shadow-xl rounded-xl my-20 -mt-12 px-6 lg:mt-20">
        <div className="flex justify-center md:justify-end -mt-16">
          <GatsbyImage
            image={data.avatar.childImageSharp.gatsbyImageData}
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          ></GatsbyImage>
        </div>
        <div>
          <h2 className="text-gray-800 text-xl font-semibold leading-8 lg:text-3xl">
            Commentaire de dégustation
          </h2>
          <div className="mt-2 text-gray-700">
            <ul>
              {commentary.split(". ").map((commentarySplitted) => (
                <li>{commentarySplitted}.</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <span className="text-md font-medium">Jean-Baptiste de Clock</span>
        </div>
      </div>
    </section>
  );
};

export default Commentary;
