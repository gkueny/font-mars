import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Hero from "../../components/Hero";
import IllustratedText from "../../components/IllustratedText";

const ContactUs = () => (
  <div className="flex items-center justify-center mt-8 lg:mt-0">
    <a
      data-splitbee-event="Contact from location page"
      href="mailto:locationfontmars@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute mt-4 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 lg:mt-12"
    >
      Contact us
    </a>
  </div>
);

const Location = ({ data }) => {
  return (
    <Layout lang="en">
      <Seo title="RENTING / PRIVATIZING" />
      <Hero type="2" image={data.headerImage} alt="Vignes de Font-Mars">
        <h2 className="absolute text-4xl text-white lg:text-7xl">
          Privatizing Font-Mars
        </h2>
      </Hero>

      <IllustratedText
        imgFluid={data.piscine.childImageSharp.gatsbyImageData}
        inverted
      >
        <h3 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl">
          RENT FOR A PRIVATE OR A CORPORATE EVENT
        </h3>
        <p className="text-gray-900 text-lg mt-2">
          Feel free to contact us if you want to book Font-Mars for an event. It
          is an ideal place to gather your friends, family or team, 40 km away
          from Montpellier, between vineyards and garrigue.
        </p>
        <p className="text-gray-900 text-lg mt-2">
          You can privatize the park, the pool area & pool house or the
          reception rooms, and we can offer you wine-related activities
          (tastings, visits of the vineyards …).
        </p>
        <br />
        <p className="text-gray-900 text-lg mt-2">
          The park is ideal for your treasure hunts or other outdoor activities.
        </p>
        <p className="text-gray-900 text-lg mt-2">
          Contact us at{" "}
          <a
            className="text-red-500 font-bold hover:text-red-600"
            href="mailto:locationfontmars@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            locationfontmars@gmail.com
          </a>
          , we will be happy to study your request.
        </p>
        <ContactUs />
      </IllustratedText>

      <IllustratedText imgFluid={data.repas.childImageSharp.gatsbyImageData}>
        <h3 className="text-gray-800 text-xl font-semibold leading-10 mb-8 lg:text-3xl">
          SEASONAL RENTAL
        </h3>
        <p className="text-gray-900 text-lg mt-2">
          Château de Font-Mars is available for weekly rental from mid-July to
          the end of August.
        </p>
        <p className="text-gray-900 text-lg mt-2">
          Family castle for rent, in the heart of a vineyard in Languedoc Thau
          Basin/Mèze, 30 minutes away from Sète and 15 kms from the beaches
          Swimming pool, park, up to 15 persons
        </p>
        <p className="text-gray-900 text-lg mt-2">
          This charming family home, 450 sqm, surrounded by a superb southern
          enclosed park of 8 000 sqm, is located :
        </p>
        <ul className="list-disc list-inside text-gray-900 text-lg pl-4">
          <li>
            In the heart of an active vineyard, surrounded by garrigue and
            pines;
          </li>
          <li>
            10 minutes away from the Thau Basin, opposite the hill of Sète, 15
            kms from the Mediterranean sea and its beaches
          </li>
          <li>
            Ideally in the heart of Languedoc, close to the seaside and its
            various touristic facilities.
          </li>
        </ul>
        <p className="text-gray-900 text-lg mt-2">
          The place is perfect for family holidays or with friends, lulled by
          the cicadas from the South and at the rhythm of a Languedoc vineyard.
          For any further information{" "}
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
