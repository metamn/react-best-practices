import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img, { CloudimageProvider } from "react-cloudimage-responsive";

/**
 * Cloudimage usage:
 *
 * 1. The image referenced (`bohen-landscape.png`) has to be accessible online
 * 2. The root url to the image (ie `http://metamn.io/react-best-practices/`) has to be set up in `cloudimageConfig.js`
 * 3. Cloudimage will replace the image with something like `https://aecowilvem.cloudimg.io/width/1400/foil1/http://metamn.io/react-best-practices/bohen-landscape.png`
 */
import cloudimageConfig from "../../cloudimageConfig.js";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the component
 */
const LoadingImages = props => {
  return (
    <CloudimageProvider config={cloudimageConfig}>
      <h1>Simple demo of react-cloudimage-responsive</h1>

      <Img src="bohen-landscape.png" alt="Demo image" ratio={1.78} />
    </CloudimageProvider>
  );
};

LoadingImages.propTypes = propTypes;
LoadingImages.defaultProps = defaultProps;

export default LoadingImages;
export {
  propTypes as LoadingImagesPropTypes,
  defaultProps as LoadingImagesDefaultProps
};