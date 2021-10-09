import React from "react";
import PropTypes from "prop-types";

const MarkdownImageRender = ({ src, alt = "" }) => {
  return <img style={{ maxHeight: "200px" }} src={src} alt={alt} />;
};

MarkdownImageRender.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default MarkdownImageRender;
