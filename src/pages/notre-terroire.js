import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

const NotreTerroir = ({ data }) => {
  return (
    <Layout>
      <SEO title="Notre terroir" />
      <div
        className="absolute h-screen-adapt bg-gray-100 z-0"
        style={{ width: "70%" }}
      ></div>

      <section className="max-w-screen-xl m-auto px-12 z-10 h-screen-adapt flex items-center">
        <article className="flex items-center m-12">
          <div
            className="bg-white rounded-xl shadow-lg p-12 z-10 -mr-6"
            style={{
              width: "calc(60% + 1.5rem)",
            }}
          >
            <h2 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl">
              Notre terroir
            </h2>
            <p className="text-gray-900 text-lg mt-2">
              En Languedoc à FONT-MARS, notre vignoble est implanté sur des
              terres où se trouvent des fossiles d’ œufs de dinosaures. C’est le
              témoignage de la préservation et de l’histoire de ce Terroir
              unique : face à la mer Méditerranée, d’un seul tenant sur 55
              hectares, il est réparti sur trois terroirs de type :
            </p>
            <ul className="list-disc list-inside text-gray-900 text-lg pl-4">
              <li>pliocène marin, au sud.</li>
              <li>
                formation fluviale, à l’ouest, le long de la rivière
                Nègue-Vaques.
              </li>
              <li>
                bégudo-rognatien inférieur de type argilo-calcaire, au nord-est.
              </li>
            </ul>
            <br />
            <p className="text-gray-900 text-lg mt-2">
              Nos vins sont l’expression de cette nature méditerranéenne
              parfaitement protégée par une famille dont l’histoire est
              intimement liée à la vigne et au vin depuis 1679 et en Languedoc
              depuis 1864. Le terroir est classé en :
            </p>
            <ul className="list-disc list-inside text-gray-900 text-lg pl-4">
              <li>
                Vin de Pays : Vin de Département, IGP (Identification
                Géographique Protégée) Pays d’Oc, Vin des Collines de la Moure.
              </li>
              <li>En AOP : Picpoul de Pinet.</li>
            </ul>
          </div>
          <div
            className="-ml-6"
            style={{
              width: "calc(40% + 1.5rem)",
              height: "600px",
            }}
          >
            <Image
              className="h-full w-full shadow-md rounded-md"
              fluid={data.image.childImageSharp.fluid}
            ></Image>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default NotreTerroir;

export const pageQuery = graphql`
  query {
    image: file(absolutePath: { regex: "/vignes.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 536, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
