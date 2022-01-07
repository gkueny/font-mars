import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import IllustratedText from "../components/IllustratedText";

const ContactUs = () => (
  <div className="flex items-center justify-center mt-8 lg:mt-0">
    <a
      data-splitbee-event="Contact from location page"
      href="mailto:locationfontmars@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute mt-4 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 lg:mt-12"
    >
      Nous contacter
    </a>
  </div>
);

const Location = ({ data }) => {
  return (
    <Layout>
      <Seo title="Notre terroir" />
      <Hero type="2" image={data.headerImage} alt="Vignes de Font-Mars">
        <h2 className="absolute text-4xl text-white lg:text-7xl">
          Privatiser Font-Mars
        </h2>
      </Hero>

      <IllustratedText
        imgFluid={data.piscine.childImageSharp.gatsbyImageData}
        inverted
      >
        <h3 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl">
          LOCATION POUR UN ÉVÉNEMENT PRIVE OU ENTREPRISE
        </h3>
        <p className="text-gray-900 text-lg mt-2">
          N'hésitez pas à nous contacter si vous souhaitez réserver Font-Mars
          pour un événement. C'est un cadre idéal pour réunir vos amis, famille
          ou équipes à 40km de Montpellier entre vignes et garrigue.
        </p>
        <p className="text-gray-900 text-lg mt-2">
          Nous pouvons privatiser le parc, l'espace piscine & pool house ou les
          salles de réception, et vous proposer des animations autour du vin
          (visite, dégustation, parcours dans les vignes...).
        </p>
        <br />
        <p className="text-gray-900 text-lg mt-2">
          Le parc est idéal pour vos chasses au trésor ou autres activités en
          extérieur.
        </p>
        <p className="text-gray-900 text-lg mt-2">
          Contactez-nous à{" "}
          <a
            className="text-red-500 font-bold hover:text-red-600"
            href="mailto:locationfontmars@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            locationfontmars@gmail.com
          </a>
          , nous serons ravis d'étudier votre demande.
        </p>
        <ContactUs />
      </IllustratedText>

      <IllustratedText imgFluid={data.repas.childImageSharp.gatsbyImageData}>
        <h3 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl">
          LOCATION SAISONNIÈRE
        </h3>
        <p className="text-gray-900 text-lg mt-2">
          Avis aux amateurs de vacances au cœur d'un vignoble Languedocien... Le
          Château de Font-Mars est disponible à la location à la semaine de
          mi-juillet à fin août.
        </p>
        <p className="text-gray-900 text-lg mt-2">
          Location Château familial au cœur d'un vignoble languedocien. 30 min
          de Sète et 15 km des plages Piscine - parc - jusqu'à 15 personnes.
        </p>
        <p className="text-gray-900 text-lg mt-2">
          Cette charmante demeure familiale entourée d’un superbe parc
          méridional clos se situe :
        </p>
        <ul className="list-disc list-inside text-gray-900 text-lg pl-4">
          <li>
            au cœur d'un vignoble en activité, entouré de garrigue et de pins
          </li>
          <li>
            à 10 min du bassin de Thau en face de la colline de Sète, à 15 km de
            la mer Méditerranée et de ses plages.
          </li>
          <li>
            {" "}
            situation idéale au cœur du Languedoc, proche de la mer et des
            différentes infrastructures touristiques et pratiques .
          </li>
        </ul>
        <p className="text-gray-900 text-lg mt-2">
          Le lieu est propice pour des vacances en famille ou entre amis,
          bercées par les cigales du Midi et au rythme d’un vignoble du
          Languedoc ! Pour plus d'informations :{" "}
          <a
            className="text-red-500 font-bold hover:text-red-600"
            href="mailto:locationfontmars@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            locationfontmars@gmail.com
          </a>
          .
        </p>
        <ContactUs />
      </IllustratedText>
    </Layout>
  );
};

export default Location;

export const pageQuery = graphql`
  {
    headerImage: file(absolutePath: { regex: "/chateau.jpg/" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    piscine: file(absolutePath: { regex: "/font-mars-location-picine.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 536, layout: CONSTRAINED)
      }
    }
    repas: file(absolutePath: { regex: "/font-mars-location-repas.jpg/" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
