import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import IllustratedText from "../../components/IllustratedText";

const NotreTerroir = ({ data }) => {
  return (
    <Layout lang="en">
      <Seo title="Our Land" />
      <IllustratedText imgFluid={data.image.childImageSharp.gatsbyImageData}>
        <h2 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl">
          Our Land
        </h2>
        <p className="text-gray-900 text-lg mt-2">
          In the Languedoc region at FONT-MARS, our vineyards are situated on
          soils, in which fossilyed dinosaur eggs are found.
          <br />
          Our wines express this Mediterranean nature perfectly protected by a
          family, who’s history is intimately bound to the vineyard and wine
          since 1679, and to the Languedoc region since 1864.
        </p>
        <br />
        <p className="text-gray-900 text-lg mt-2">
          The majority of dinosaurs laid eggs. But until recently, only a few
          dinosaur eggs have been found.In France, 1859 is the official date of
          the first discovery of dinosaur eggs. Since then, important
          discoveries in at least than 220 locations around the world have been
          made.In the Languedoc region at FONT-MARS, our vineyard is planted on
          a soil of the type limestone-clay, where fossils of dinosaur eggs are
          frequently found. <br />
          This is the witness to the nature and the history of this unique
          area.The dinosaurs, did not set on their eggs, but hid them in
          river-banks, and incubated them in heaps of fermenting vegetation,
          which gave off the required heat. It is in respect to this touching
          past, that we name property of FONT-MARS, the soil of dinosaurs.
        </p>
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
