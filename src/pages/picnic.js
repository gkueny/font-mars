import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import IllustratedText from "../components/IllustratedText";

export const PicnicCard = ({ imagePicnic }) => {
  return (
    <IllustratedText
      imgFluid={imagePicnic.childImageSharp.gatsbyImageData}
      illustrationClassName="illustratedtext-illustration-picnic"
      textClassName="illustratedtext-text-picnic"
    >
      <h2 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl text-center lg:text-left">
        CHATEAU FONT-MARS - 8 JUIN 2025
      </h2>
      <p className="text-gray-900 text-lg mt-2 text-center lg:text-left">
        Rejoignez-nous au pique-nique des vignerons indépendants <br />
        <b>DIMANCHE 8 JUIN 2025</b>
      </p>
      <br />
      <p className="text-gray-900 text-lg mt-2 text-center lg:text-left">
        Places limitées - sur réservation
      </p>
      <p className="mt-2 text-gray-900 text-center lg:text-left">
        04 67 43 81 19
      </p>

      <p className="mt-2 text-gray-900 text-center lg:text-left">
        GFA de FONT-MARS <br /> RCS Montpellier 325 485 316
      </p>

      <div className="flex items-center justify-center mt-8">
        <a
          data-splitbee-event="Contact from contact page"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:infos@font-mars.com"
          className="absolute mt-8 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 lg:mt-20"
        >
          Nous contacter
        </a>
      </div>
    </IllustratedText>
  );
};

const Picnic = ({ data }) => {
  return (
    <Layout>
      <Seo title="Picnic 2025" />

      <PicnicCard imagePicnic={data.imagePicnic} />
    </Layout>
  );
};

export default Picnic;

export const pageQuery = graphql`
  {
    imagePicnic: file(absolutePath: { regex: "/picnic-2025.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 600, height: 600, layout: FULL_WIDTH)
      }
    }
  }
`;
