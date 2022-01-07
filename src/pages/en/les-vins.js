import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Hero from "../../components/Hero";
import Wines from "../../components/Wines";

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout lang="en" location={location} title={siteTitle}>
      <Seo />
      <Hero type="2" image={data.headerImage} alt="Vignes de Font-Mars">
        <h2 className="absolute text-4xl text-white lg:text-7xl">Our wines</h2>
      </Hero>
      <div className="pt-24">
        <Wines lang="en" />
      </div>
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
    headerImage: file(absolutePath: { regex: "/vignes-3.jpg/" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
