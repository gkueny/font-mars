import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50, layout: FIXED)
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author.name}
        style={{
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Écris par <strong>{author.name}</strong>
      </p>
    </div>
  );
};

export default Bio;
