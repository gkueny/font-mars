import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Commentary = ({ commentary }) => {
  const data = useStaticQuery(graphql`
    query CommentaryQuery {
      avatar: file(absolutePath: { regex: "/jean-baptiste.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <section className="relative m-auto z-30 max-w-lg px-8 lg:px-0 lg:m-0">
      <div class="py-4 px-8 bg-white shadow-xl rounded-xl my-20 -mt-12 px-6 lg:mt-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <Image
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            fixed={data.avatar.childImageSharp.fixed}
          ></Image>
        </div>
        <div>
          <h2 class="text-gray-800 text-xl font-semibold leading-8 lg:text-3xl">
            Commentaire de dégustation
          </h2>
          <div class="mt-2 text-gray-700">
            <ul>
              {commentary.split(". ").map((commentarySplitted) => (
                <li>{commentarySplitted}.</li>
              ))}
            </ul>
          </div>
        </div>
        <div class="flex justify-end mt-4">
          <span class="text-md font-medium">Jean-Baptiste de Clock</span>
        </div>
      </div>
    </section>
  );
};

export default Commentary;
