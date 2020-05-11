import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Hero from "../components/Hero";
import Wines from "../components/Wines";

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <Hero type="2" image={data.headerImage} alt="Vignes de Font-Mars">
        <h2 className="absolute text-7xl text-white">Nos vins</h2>
      </Hero>
      <div className="pt-24">
        <Wines />
      </div>
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
    headerImage: file(absolutePath: { regex: "/vignes-3.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1960, maxHeight: 1305) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
