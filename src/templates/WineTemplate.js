import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Markdown from "../components/Markdown";
import Commentary from "../components/Commentary";

const WineTemplate = ({ data }) => {
  const wine = data.markdownRemark;
  const lang = wine.frontmatter.slug.includes("/en/") ? "en" : "fr";
  const background = wine.frontmatter.background;
  const mobileBackground = wine.frontmatter.mobileBackground;
  const bottle = wine.frontmatter.bottle;

  return (
    <Layout lang={lang}>
      <Seo title={wine.frontmatter.title} />

      {/* Hero Section - Image with title overlay */}
      <section className="relative w-full" style={{ height: "clamp(300px, 50vh, 500px)" }}>
        {mobileBackground && (
          <GatsbyImage
            image={mobileBackground.childImageSharp.gatsbyImageData}
            className="w-full h-full block lg:hidden"
            style={{ position: "absolute", inset: 0 }}
            imgStyle={{ objectFit: "cover" }}
            alt=""
          />
        )}
        {background && (
          <GatsbyImage
            image={background.childImageSharp.gatsbyImageData}
            className="w-full h-full hidden lg:block"
            style={{ position: "absolute", inset: 0 }}
            imgStyle={{ objectFit: "cover" }}
            alt=""
          />
        )}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {wine.frontmatter.title}
            </h1>
            {wine.frontmatter.outOfStock && (
              <span className="inline-block bg-red-100 rounded-full px-4 py-2 text-lg font-bold text-red-800">
                {lang === "fr" ? "Épuisé" : "Out of stock"}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Left: Commentary + Description */}
          <div className="flex-1">
            {/* Commentary */}
            <div className="mb-8 flex lg:gap-12 justify-center">
              <Commentary commentary={wine.frontmatter.commentary} lang={lang} bottle={bottle} />
              
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none">
              <Markdown source={wine.rawMarkdownBody} escapeHtml={false} />
            </div>
          </div>
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
            gatsbyImageData(layout: FULL_WIDTH)
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
