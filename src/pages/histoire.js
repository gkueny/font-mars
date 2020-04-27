import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

const Histoire = ({ data }) => {
  return (
    <Layout>
      <SEO title="Histoire" />
      <div
        className="absolute bg-gray-100 z-0"
        style={{ width: "70%", height: "600px" }}
      ></div>
      <div
        className="absolute bg-gray-100 z-0"
        style={{ width: "30%", height: "900px", top: "600px", left: "70%" }}
      ></div>
      <section
        className="max-w-screen-xl m-auto px-12 z-10 flex items-center"
        style={{ height: "600px" }}
      >
        <article className="flex items-center m-12">
          <div
            className="-mr-6"
            style={{
              width: "calc(40% + 1.5rem)",
            }}
          >
            <Image
              className="h-full w-full shadow-md rounded-md"
              fluid={data.imageHistoire.childImageSharp.fluid}
            ></Image>
          </div>

          <div
            className="bg-white rounded-xl shadow-lg p-12 z-10 -ml-6"
            style={{
              width: "calc(60% + 1.5rem)",
            }}
          >
            <h2 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl">
              UN VRAI CHÂTEAU
            </h2>
            <p className="text-gray-900 text-lg mt-2">
              Les bâtiments sont anciens mais la maison familiale est un vrai
              Château. Le site est séduisant, la première réaction des visiteurs
              est souvent : « Que c’est beau ! ». Pour ceux qui y travaillent ou
              qui y ont travaillé, l’ensemble est puissant et fort, lié à une
              histoire, une région Méditerranéenne encore sauvage. C’est un
              endroit calme où la nature est protégée (les cigales chantent
              fort), et la mer proche : le paysage est mythique du sud de la
              France.
            </p>
            <br />
            <p className="text-gray-900 text-lg mt-2">
              L’effort vigneron est important pour moderniser l’exploitation, en
              particulier depuis la reprise par Jean-Baptiste de Clock succédant
              à ses parents. Le terroir est spécifique et les vins sont vrais.
              Liaison Radio de Diplôme des Forts et Châteaux de France. F6FBE/P
              DFCF 34008
            </p>
          </div>
        </article>
      </section>
      <section
        className="max-w-screen-xl m-auto px-12 z-10 h-screen-adapt flex items-center"
        style={{ height: "900px" }}
      >
        <article className="flex items-center m-12">
          <div
            className="bg-white rounded-xl shadow-lg p-12 z-10 -mr-6"
            style={{
              width: "calc(60% + 1.5rem)",
            }}
          >
            <h2 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl">
              UNE FAMILLE DE VIN
            </h2>
            <p className="text-gray-900 text-lg mt-2">
              La passion du métier de vigneron-éleveur est une vieille tradition
              dans la famille de Clock. D’origine hollandaise, Jean Clock, venu
              s’établir à Bordeaux en 1679, choisit de cultiver un vignoble de
              la région. Par la suite il est naturalisé Français en 1686 par le
              Roi Louis XIV, ce dernier ayant su apprécier la qualité de ses
              vins.
            </p>
            <br />
            <p className="text-gray-900 text-lg mt-2">
              Parmi ses descendants Jean-Baptiste-Alexandre est anobli en
              juillet 1757 par charge de « Conseiller Grand Secrétaire du Roi ».
              S’étaient succédées de nombreuses générations de vignerons lorsque
              Léon de Clock, par son mariage avec Camille de Vulliod en 1949,
              assure l’exploitation viticole du Domaine. « Le Château Font-Mars
              », situé sur le territoire de Mèze, était exploité jusqu’alors par
              les ascendants de Camille depuis 1864 (Privat, Allié, Guibert, de
              Vulliod).
            </p>
            <br />
            <p className="text-gray-900 text-lg mt-2">
              Jean-Baptiste de Clock, leur dernier fils, en est actuellement le
              propriétaire et continue ainsi la tradition des deux familles.
              Nous leur devons la transmission jusqu’à notre époque de
              l’authenticité du vignoble de FONT-MARS et de ses reliques
              préhistoriques.
            </p>
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
              fluid={data.imageFamille.childImageSharp.fluid}
            ></Image>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Histoire;

export const pageQuery = graphql`
  query {
    imageHistoire: file(absolutePath: { regex: "/chateau.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 536, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFamille: file(absolutePath: { regex: "/jean-baptiste.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 536, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
