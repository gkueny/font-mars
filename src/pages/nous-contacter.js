import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Map from "../components/Map";
import ContactCard from "../components/ContactCard";

const ContactInfos = () => {
  return (
    <>
      <div className="contact-infos-background absolute bg-gray-100 z-0 hidden lg:block"></div>
      <section className="contact-infos relative max-w-screen-xl m-auto px-1 z-10 flex items-center py-12 lg:px-12 lg:py-12 w-full mb:6">
        <article className="flex items-center flex-col h-full lg:flex-row lg:m-12 w-full">
          <Map className="contact-infos-map" />
          <div className="contact-card-wrapper bg-white rounded-xl shadow-lg p-4 z-10 -mt-32 lg:p-12 lg:mt-0 lg:-ml-6">
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
      <Seo title="Nous contacter" />
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
