import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Map from "../components/Map";
import ContactCard from "../components/ContactCard";
import useWindowSize from "../hooks/useWindowSize";

const MOBILE_MAX_WIDTH = 1024;

const ContactInfos = ({ height = 750 }) => {
  const { width } = useWindowSize();
  const isMobile = width < MOBILE_MAX_WIDTH;

  return (
    <>
      {!isMobile && (
        <div
          className="absolute bg-gray-100 z-0"
          style={{
            width: "70%",
            height: `${height}px`,
            left: "0",
          }}
        ></div>
      )}
      <section
        className="relative max-w-screen-xl m-auto px-1 z-10 flex items-center h-auto py-12 lg:px-12 lg:py-12 w-full mb:6"
        style={{
          height: !isMobile && `${height}px`,
        }}
      >
        <article className="flex items-center flex-col h-full lg:flex-row lg:m-12 w-full">
          <Map
            width={isMobile ? "100%" : "calc(60% + 1.5rem)"}
            height={isMobile ? "600px" : "100%"}
          />

          <div
            className="bg-white rounded-xl shadow-lg p-4 z-10 -mt-32 lg:p-12 lg:mt-0 lg:-ml-6"
            style={{
              width: isMobile ? "calc(100% - 2rem)" : "calc(40% + 1.5rem)",
            }}
          >
            <ContactCard />
          </div>
        </article>
      </section>
    </>
  );
};
const NousContacter = () => {
  return (
    <Layout>
      <SEO title="Nous contacter" />
      <ContactInfos />
    </Layout>
  );
};

export default NousContacter;

export const pageQuery = graphql`
  {
    image: file(absolutePath: { regex: "/vignes.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 536, height: 600, layout: CONSTRAINED)
      }
    }
  }
`;
