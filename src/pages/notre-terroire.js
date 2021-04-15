import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import IllustratedText from "../components/IllustratedText";

const NotreTerroir = ({ data }) => {
  return (
    <Layout>
      <SEO title="Notre terroir" />
      <IllustratedText imgFluid={data.image.childImageSharp.gatsbyImageData}>
        <h2 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl">
          Notre terroir
        </h2>
        <p className="text-gray-900 text-lg mt-2">
          En Languedoc à FONT-MARS, notre vignoble est implanté sur des terres
          où se trouvent des fossiles d’ œufs de dinosaures. C’est le témoignage
          de la préservation et de l’histoire de ce Terroir unique : face à la
          mer Méditerranée, d’un seul tenant sur 55 hectares, il est réparti sur
          trois terroirs de type :
        </p>
        <ul className="list-disc list-inside text-gray-900 text-lg pl-4">
          <li>pliocène marin, au sud.</li>
          <li>
            formation fluviale, à l’ouest, le long de la rivière Nègue-Vaques.
          </li>
          <li>
            bégudo-rognatien inférieur de type argilo-calcaire, au nord-est.
          </li>
        </ul>
        <br />
        <p className="text-gray-900 text-lg mt-2">
          Nos vins sont l’expression de cette nature méditerranéenne
          parfaitement protégée par une famille dont l’histoire est intimement
          liée à la vigne et au vin depuis 1679 et en Languedoc depuis 1864. Le
          terroir est classé en :
        </p>
        <ul className="list-disc list-inside text-gray-900 text-lg pl-4">
          <li>
            Vin de Pays : Vin de Département, IGP (Identification Géographique
            Protégée) Pays d’Oc, Vin des Collines de la Moure.
          </li>
          <li>En AOP : Picpoul de Pinet.</li>
        </ul>
      </IllustratedText>
    </Layout>
  );
};

export default NotreTerroir;

export const pageQuery = graphql`
  {
    image: file(absolutePath: { regex: "/vignes.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 536, height: 600, layout: CONSTRAINED)
      }
    }
  }
`;
