import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const Phone = () => (
  <svg className="h-6 w-6 fill-current" viewBox="0 0 34.546 34.546">
    <path d="M29.33,19.339c-2.326-0.545-5.3-1.969-6.377-3.737c-0.603-0.984-0.666-2.094-0.179-3.042   c0.027-0.051,0.074-0.128,0.109-0.188c-0.028-0.209,0.021-0.486,0.172-0.847c0.011-0.024,0.012-0.027,0.02-0.044H11.122   c0.006,0.014,0.006,0.014,0.014,0.032c0,0,0.001,0.001,0.001,0.002c0.268,0.418,0.502,0.792,0.627,1.033   c0.495,0.961,0.431,2.07-0.17,3.055c-1.08,1.77-4.053,3.193-6.381,3.738L4.57,30.124c-0.07,1.183,0.705,2.149,1.723,2.149h21.958   c1.018,0,1.792-0.967,1.721-2.149L29.33,19.339z M13.683,26.765h-2.062c-0.38,0-0.688-0.309-0.688-0.688s0.308-0.688,0.688-0.688   h2.062c0.379,0,0.688,0.309,0.688,0.688S14.062,26.765,13.683,26.765z M13.683,24.143h-2.062c-0.38,0-0.688-0.308-0.688-0.687   c0-0.382,0.308-0.688,0.688-0.688h2.062c0.379,0,0.688,0.306,0.688,0.688C14.371,23.835,14.062,24.143,13.683,24.143z    M13.683,21.521h-2.062c-0.38,0-0.688-0.308-0.688-0.688c0-0.379,0.308-0.688,0.688-0.688h2.062c0.379,0,0.688,0.309,0.688,0.688   S14.062,21.521,13.683,21.521z M18.304,26.765h-2.061c-0.38,0-0.688-0.309-0.688-0.688s0.309-0.688,0.688-0.688h2.062   c0.379,0,0.688,0.309,0.688,0.688C18.991,26.456,18.683,26.765,18.304,26.765z M18.304,24.143h-2.061   c-0.38,0-0.688-0.308-0.688-0.687c0-0.382,0.309-0.688,0.688-0.688h2.062c0.379,0,0.688,0.306,0.688,0.688   C18.991,23.835,18.683,24.143,18.304,24.143z M18.304,21.521h-2.061c-0.38,0-0.688-0.308-0.688-0.688   c0-0.379,0.309-0.688,0.688-0.688h2.062c0.379,0,0.688,0.309,0.688,0.688C18.991,21.212,18.683,21.521,18.304,21.521z    M22.924,26.765h-2.062c-0.379,0-0.687-0.309-0.687-0.688s0.308-0.688,0.687-0.688h2.062c0.381,0,0.688,0.309,0.688,0.688   C23.612,26.456,23.306,26.765,22.924,26.765z M22.924,24.143h-2.062c-0.379,0-0.687-0.308-0.687-0.687   c0-0.382,0.308-0.688,0.687-0.688h2.062c0.381,0,0.688,0.306,0.688,0.688C23.612,23.835,23.306,24.143,22.924,24.143z    M22.924,21.521h-2.062c-0.379,0-0.687-0.308-0.687-0.688c0-0.379,0.308-0.688,0.687-0.688h2.062c0.381,0,0.688,0.309,0.688,0.688   C23.612,21.212,23.306,21.521,22.924,21.521z M34.372,13.114c-0.043,0.216-0.045,0.441-0.13,0.646   c-0.497,1.202-1.429,2.197-2.115,3.305c-0.885,1.414-8.406-1.634-7.437-3.521c0.365-0.698,1.789-2.626,1.896-3.401   c0.098-0.692-0.818-1.233-1.664-1.302c-2.232-0.181-5.083-0.017-7.452-0.002v0.002c-0.063,0-0.133-0.001-0.198-0.001   c-0.064,0-0.134,0.001-0.197,0.001V8.839c-2.369-0.015-5.22-0.178-7.452,0.002c-0.846,0.069-1.762,0.61-1.665,1.302   c0.108,0.775,1.531,2.703,1.896,3.401c0.971,1.887-6.55,4.935-7.435,3.521c-0.688-1.108-1.618-2.103-2.116-3.305   c-0.084-0.205-0.086-0.43-0.129-0.646c-1.104-4.93,3.148-9.96,9.551-10.476c2.445-0.198,4.896-0.31,7.35-0.354V2.272   c0.066,0.001,0.131,0.005,0.197,0.006c0.065-0.001,0.131-0.005,0.198-0.006v0.012c2.452,0.044,4.903,0.156,7.35,0.354   C31.222,3.153,35.474,8.185,34.372,13.114z" />
  </svg>
);

const Marker = () => (
  <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
    <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035    c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719    c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z" />
  </svg>
);

const ContactCard = ({ lang = "fr" }) => {
  const data = useStaticQuery(graphql`
    query ContactCardQuery {
      contactAvatar: file(absolutePath: { regex: "/jean-baptiste.jpg/" }) {
        childImageSharp {
          gatsbyImageData(width: 128, height: 128, layout: FIXED)
        }
      }
    }
  `);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-lg">
        <div className="flex align-center p-2">
          <GatsbyImage
            alt="Jean-Baptiste de Clock"
            image={data.contactAvatar.childImageSharp.gatsbyImageData}
            className="w-32 h-32 rounded-full mx-auto"
            imgStyle={{ borderRadius: "8rem" }}
          ></GatsbyImage>
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            Jean-Baptiste de Clock
          </h3>

          <div className="flex mt-4 items-center text-gray-900">
            <Marker />
            <p className="px-4 text-sm">
              Domaine de Font-Mars – Route de Marseillan
              <br />D 51 – 34140 MEZE - FRANCE
            </p>
          </div>
          <div className="flex items-center mt-4 text-gray-900">
            <Phone />
            <p className="px-4 text-sm">04 67 43 81 19</p>
          </div>

          <div className="flex items-center justify-center mt-8 text-gray-900">
            <p className="px-2 text-sm text-center">
              GFA de FONT-MARS <br /> RCS Montpellier 325 485 316
            </p>
          </div>

          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <a
              data-splitbee-event="Contact from contact page"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:infos@font-mars.com"
              className="absolute mt-4 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 lg:mt-14"
            >
              {lang === "fr" ? "Nous contacter" : "Contact us"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
