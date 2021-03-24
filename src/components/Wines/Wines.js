import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Glide from "@glidejs/glide";
import Wine from "./Wine";

const Wines = () => {
  React.useEffect(() => {
    new Glide(".glide", {
      startAt: 0,
      perView: 3,
      breakpoints: {
        968: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }, []);

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
                  gatsbyImageData(
                    height: 400
                    transformOptions: { fit: COVER }
                    layout: FULL_WIDTH
                  )
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
      <div className="flex flex-col max-w-screen-xl m-auto p-2 items-center">
        <div className="flex w-full flex-wrap justify-center">
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {wines.map(({ node }) => (
                  <li key={node.id} className="glide__slide">
                    <Wine wine={node} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm8-10a8 8 0 1 0-16 0 8 8 0 0 0 16 0zM7.46 9.3L11 5.75l1.41 1.41L9.6 10l2.82 2.83L11 14.24 6.76 10l.7-.7z" />
                </svg>
              </button>
              <button
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm10.54.7L9 14.25l-1.41-1.41L10.4 10 7.6 7.17 9 5.76 13.24 10l-.7.7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wines;
