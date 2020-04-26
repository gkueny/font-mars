import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Wine from "./Wine";

const Wines = () => {
  const data = useStaticQuery(graphql`
    query AllWines {
      allWines: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/wine/" } }
      ) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              gamme
              appellation
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 580) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const wines = data.allWines.edges;

  return (
    <section>
      <div className="flex flex-col max-w-screen-xl m-auto p-12 items-center">
        <h2 className="text-4xl font-bold leading-10 p-10">NOS VINS</h2>
        <div className="flex flex-wrap justify-center">
          {wines.map(({ node }) => (
            <Wine key={node.id} wine={node} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wines;
