import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Description from "./Wine/Description";
import { LeftTriangle, RightTriangle } from "./Wine/Triangles";
import Images from "./Wine/Images";

const WineTemplate = ({ data }) => {
  const wine = data.markdownRemark;

  const hasImages = wine.frontmatter.background && wine.frontmatter.bottle;
  const lang = wine.frontmatter.slug.includes("/en/") ? "en" : "fr";
  return (
    <Layout lang={lang}>
      <Seo title={wine.frontmatter.title} />
      <section className="h-full">
        <div
          className="relative flex w-full h-full"
          style={{ maxHeight: "1000px" }}
        >
          <Description
            title={wine.frontmatter.title}
            description={wine.rawMarkdownBody}
            commentary={wine.frontmatter.commentary}
            mobileBackground={wine.frontmatter.mobileBackground}
            outOfStock={wine.frontmatter.outOfStock}
            hasImages={hasImages}
            lang={lang}
          />
          {hasImages && (
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
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      rawMarkdownBody
      frontmatter {
        slug
        title
        commentary
        outOfStock
        bottle {
          childImageSharp {
            gatsbyImageData(width: 315, layout: FIXED)
          }
        }
        background {
          childImageSharp {
            gatsbyImageData(width: 500, layout: CONSTRAINED)
          }
        }
        mobileBackground {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
