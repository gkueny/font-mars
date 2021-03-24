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
        <div className="absolute text-4xl text-white text-center lg:text-7xl">
          <h2 className="relative break-words">Domaine Font-Mars</h2>
        </div>
      </Hero>

      <h2 className="text-center text-4xl font-bold leading-10 p-24">
        NOS VINS
      </h2>

      <Wines />
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    headerImage: file(absolutePath: { regex: "/home-header.jpg/" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
