import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Hero from "../components/Hero";

const Location = ({ data }) => {
  return (
    <Layout>
      <SEO title="Notre terroir" />
      <Hero type="2" image={data.headerImage} alt="Vignes de Font-Mars">
        <h2 className="absolute text-7xl text-white">Privatiser Font-Mars</h2>
      </Hero>

      <div
        className="absolute bg-gray-100 z-0"
        style={{ width: "70%", height: "700px" }}
      ></div>
      <section
        className="max-w-screen-xl m-auto px-12 z-10 flex items-center"
        style={{ height: "700px" }}
      >
        <article className="flex items-center m-12">
          <div
            className="bg-white rounded-xl shadow-lg p-12 z-10 -mr-24"
            style={{
              width: "calc(70% + 6rem)",
            }}
          >
            <h3 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl">
              LOCATION POUR UN ÉVÉNEMENT PRIVE OU ENTREPRISE
            </h3>
            <p className="text-gray-900 text-lg mt-2">
              N'hésitez pas à nous contacter si vous souhaitez réserver
              Font-Mars pour un événement. C'est un cadre idéal pour réunir vos
              amis, famille ou équipes à 40km de Montpellier entre vignes et
              garrigue.
            </p>
            <p className="text-gray-900 text-lg mt-2">
              Nous pouvons privatiser le parc, l'espace piscine & pool house ou
              les salles de réception, et vous proposer des animations autour du
              vin (visite, dégustation, parcours dans les vignes...).
            </p>
            <br />
            <p className="text-gray-900 text-lg mt-2">
              Le parc est idéal pour vos chasses au trésor ou autres activités
              en extérieur.
            </p>
            <p className="text-gray-900 text-lg mt-2">
              Contactez-nous à{" "}
              <a
                className="text-red-500 font-bold hover:text-red-600"
                href="mailto:locationfontmars@gmail.com"
              >
                locationfontmars@gmail.com
              </a>
              , nous serons ravis d'étudier votre demande.
            </p>
          </div>
          <div
            className="-ml-24"
            style={{
              width: "calc(50% + 6rem)",
              height: "600px",
            }}
          >
            <Image
              className="h-full w-full shadow-md rounded-md"
              fluid={data.piscine.childImageSharp.fluid}
            ></Image>
          </div>
        </article>
      </section>

      <div
        className="absolute bg-gray-100 z-0"
        style={{
          width: "30%",
          height: "700px",
          left: "70%",
        }}
      ></div>

      <section
        className="max-w-screen-xl m-auto px-12 z-10 flex items-center"
        style={{ height: "700px" }}
      >
        <article className="flex items-center m-12">
          <div
            className="-mr-24"
            style={{
              width: "calc(50% + 6rem)",
              height: "600px",
            }}
          >
            <Image
              className="h-full w-full shadow-md rounded-md"
              fluid={data.repas.childImageSharp.fluid}
            ></Image>
          </div>
          <div
            className="bg-white rounded-xl shadow-lg p-12 z-10 -ml-36"
            style={{
              width: "calc(70% + 6rem)",
            }}
          >
            <h3 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl">
              LOCATION SAISONNIÈRE
            </h3>
            <p className="text-gray-900 text-lg mt-2">
              Avis aux amateurs de vacances au cœur d'un vignoble
              Languedocien... Le Château de Font-Mars est disponible à la
              location à la semaine de mi-juillet à fin août.
            </p>
            <p className="text-gray-900 text-lg mt-2">
              Location Château familial au cœur d'un vignoble languedocien. 30
              min de Sète et 15 km des plages Piscine - parc - jusqu'à 15
              personnes.
            </p>
            <p className="text-gray-900 text-lg mt-2">
              Cette charmante demeure familiale entourée d’un superbe parc
              méridional clos se situe :
            </p>
            <ul className="list-disc list-inside text-gray-900 text-lg pl-4">
              <li>
                au cœur d'un vignoble en activité, entouré de garrigue et de
                pins
              </li>
              <li>
                à 10 min du bassin de Thau en face de la colline de Sète, à 15
                km de la mer Méditerranée et de ses plages.
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
              >
                locationfontmars@gmail.com
              </a>
              .
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Location;

export const pageQuery = graphql`
  query {
    headerImage: file(absolutePath: { regex: "/chateau.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1960, maxHeight: 1305) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    piscine: file(absolutePath: { regex: "/font-mars-location-picine.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 536) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    repas: file(absolutePath: { regex: "/font-mars-location-repas.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
