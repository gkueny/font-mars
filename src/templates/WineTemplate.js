import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Description from "./Wine/Description";
import { LeftTriangle, RightTriangle } from "./Wine/Triangles";
import Images from "./Wine/Images";
import useWindowSize from "../hooks/useWindowSize";

const MOBILE_MAX_WIDTH = 1023;

const WineTemplate = ({ data }) => {
  const { width } = useWindowSize();
  const isDesktop = width > MOBILE_MAX_WIDTH;
  const isMobile = !isDesktop;

  const wine = data.markdownRemark;
  return (
    <Layout>
      <SEO title={wine.frontmatter.title} />
      <section className="lg:overflow-hidden h-full">
        <div
          className="relative flex w-full h-full lg:overflow-hidden "
          style={{ maxHeight: "1000px" }}
        >
          <Description
            title={wine.frontmatter.title}
            description={wine.rawMarkdownBody}
            commentary={wine.frontmatter.commentary}
            mobileBackground={wine.frontmatter.mobileBackground}
            isMobile={isMobile}
            isDesktop={isDesktop}
          />
          {isDesktop && (
            <>
              <LeftTriangle />
              <Images
                background={wine.frontmatter.background}
                bottle={wine.frontmatter.bottle}
              />
              <RightTriangle />
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default WineTemplate;

export const pageQuery = graphql`
  query WineBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      rawMarkdownBody
      frontmatter {
        title
        commentary
        bottle {
          childImageSharp {
            fixed(width: 330) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        background {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobileBackground {
          childImageSharp {
            fluid(maxWidth: 1023) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
