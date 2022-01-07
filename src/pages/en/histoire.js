import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import IllustratedText from "../../components/IllustratedText";

const Histoire = ({ data }) => {
  return (
    <Layout lang="en">
      <Seo title="History" />

      <IllustratedText
        imgFluid={data.imageHistoire.childImageSharp.gatsbyImageData}
      >
        <h2 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl">
          A REAL CASTLE
        </h2>
        <p className="text-gray-900 text-lg mt-2">
          The buildings are ancient and the family house is a real château. The
          first reaction of visitors looking at this seductive site is very
          often: « Wow, how beautiful ! » For those, who work or have worked at
          this place, the site is powerful and strong, connected to history, a
          wild Mediterranean region: the property is big, act of natural
          distinction – « This is a rare location… » The site is tranquille,
          where nature is protected (the cicadas sing loudly) and to the sea is
          close: the landscape typifies the mystic south of France.
        </p>
        <br />
        <p className="text-gray-900 text-lg mt-2">
          The winegrower has made a big effort in the recent10 years to
          modernise the property, the soil is specific and the wines are true to
          it.
        </p>
      </IllustratedText>

      <IllustratedText
        imgFluid={data.imageFamille.childImageSharp.gatsbyImageData}
        inverted
      >
        <h2 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl">
          A FAMILY OF WINE-GROVERS
        </h2>
        <p className="text-gray-900 text-lg mt-2">
          The passion of winegrower and wineproducer is an old tradition for the
          family de Clock. Originally , Dutch, Jean Clock, settled in Bordeaux
          in 1679, and decided to cultivate a vineyard in that region. As a
          result King Louis the XIV, who recognized the quality of his wines,
          naturalized him French in 1686.
        </p>
        <br />
        <p className="text-gray-900 text-lg mt-2">
          Amongst his ansestors Jean-Baptiste-Alexandre was ennobled in 1757 by
          Great Counsellor of the King (Conseiller Grand Secrétaire du Roi).
          Like numerous generations of winegrowers and just after his marriage
          with Camille de Vulliod, Leon de Clock undertook to manage the
          vineyard of the domaine. “Le Château Font-Mars” (The Castle of
          Font-Mars) situated on the property at Mèze. Since 1864 until today
          the property was managed by the ancestors of Camille (Privat, Allié,
          Guibert, de Vulliod).
        </p>
        <br />
        <p className="text-gray-900 text-lg mt-2">
          Jean-Baptiste de Clock, their youngest son, is now the owner and
          perpetuates both family traditions. We owe them the transmission
          through time of the authentic vineyards of FONT-MARS and it’s
          prehistoric relics.
        </p>
      </IllustratedText>
    </Layout>
  );
};

export default Histoire;

export const pageQuery = graphql`
  {
    imageHistoire: file(absolutePath: { regex: "/chateau.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 536, height: 600, layout: CONSTRAINED)
      }
    }
    imageFamille: file(absolutePath: { regex: "/jean-baptiste.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 536, height: 600, layout: CONSTRAINED)
      }
    }
  }
`;
