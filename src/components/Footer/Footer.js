import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(absolutePath: { regex: "/rf.png/" }) {
        childImageSharp {
          gatsbyImageData(height: 50, layout: FIXED)
        }
      }
    }
  `);

  const logo = getImage(data.logo);

  return (
    <footer
      className="mt-auto w-full"
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        padding: "40px 20px 20px 20px",
        zIndex: "30",
      }}
    >
      <div
        className="flex items-center w-full mx-auto"
        style={{
          backgroundColor: "#fff",
          border: "4px solid #000",
          minHeight: "60px",
          padding: "12px 20px",
          maxWidth: "1200px",
        }}
      >
        {/* Logo République Française */}
        <div
          className="flex-shrink-0"
          style={{ marginRight: "20px" }}
        >
          {logo && <GatsbyImage image={logo} alt="République Française" />}
        </div>

        {/* Texte légal */}
        <div style={{ flex: 1 }}>
          {/* Niveau 1 - Bold, centré */}
          <p
            style={{
              fontWeight: 700,
              fontSize: "clamp(0.65rem, 1.1vw, 0.95rem)",
              color: "#000",
              textAlign: "center",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            INTERDICTION DE VENTE DE BOISSONS ALCOOLIQUES AUX MINEURS DE MOINS DE 18 ANS
          </p>

          {/* Niveau 2 - Regular, centré */}
          <p
            style={{
              fontWeight: 400,
              fontSize: "clamp(0.55rem, 0.9vw, 0.85rem)",
              color: "#000",
              textAlign: "center",
              margin: "4px 0",
              lineHeight: 1.3,
            }}
          >
            La preuve de majorité de l'acheteur est exigée au moment de la vente en ligne.
          </p>

          {/* Niveau 3 - Medium, ferré à droite */}
          <p
            style={{
              fontWeight: 500,
              fontSize: "clamp(0.5rem, 0.8vw, 0.75rem)",
              color: "#000",
              textAlign: "right",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            Code de la santé publique, Art. L.3342-1 et L.3353-3
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
