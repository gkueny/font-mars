import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Hero from "../components/Hero";
import Wines from "../components/Wines";

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const headerImage = data.headerImage;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <Hero image={headerImage} alt="Vignes de Font-Mars">
        <div className="absolute text-7xl text-white text-center">
          <h2 className="relative break-words">Domaine Font-Mars</h2>
        </div>
      </Hero>
      <Wines />
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    headerImage: file(absolutePath: { regex: "/home-header.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1960, maxHeight: 1305) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
