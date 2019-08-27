import React from "react";
import PropTypes from "prop-types";
import Img, { CloudimageProvider } from "react-cloudimage-responsive";
import { useMediaQuery } from "react-responsive";

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
const propTypes = {
  /**
   * The master image source
   */
  src: PropTypes.string,
  /**
   * The image title
   */
  alt: PropTypes.string,
  /**
   * The intrinsic ratio of the image
   */
  ratio: PropTypes.number,
  /**
   * The filters applied to the image
   *
   * In config a default filter is set to `q35.foil1`
   * That means quality=35 which in text screenshots is to low and needs to be adjusted indiviually
   *
   * @link https://github.com/scaleflex/react-cloudimage-responsive#filters
   */
  filters: PropTypes.string,
  /**
   * The size of the image
   */
  size: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  src: "bohen-portrait.png",
  alt: "Default image",
  ratio: 1.5,
  filters: "",
  size: ""
};

/**
 * Defines the default props for art direction
 */
const defaultPropsArtDirection = {
  images: [
    {
      mediaQuery: "(orientation: portrait)",
      src: "bohen-portrait.png",
      alt: "Default image portrait mode",
      ratio: 0.75
    },
    {
      mediaQuery: "(orientation: landscape)",
      src: "bohen-landscape.png",
      alt: "Default image landscape mode",
      ratio: 1.78
    }
  ]
};

/**
 * Display an image
 */
const Image = props => {
  return (
    <CloudimageProvider config={cloudimageConfig}>
      <Img {...props} />
    </CloudimageProvider>
  );
};

/**
 * Displays an image with art direction
 */
const ImageArtDirection = props => {
  const { images } = props;

  /**
   * Here we cant' loop through various images and do `useMediaQuery` since hooks can't be called inside a loop
   *
   * Temporarily we loop manually ...
   */

  const image1 = images[0];
  const image2 = images[1];
  const mediaQuery = useMediaQuery({ query: image1.mediaQuery });

  return mediaQuery ? <Image {...image1} /> : <Image {...image2} />;
};

/**
 * Displays the component
 */
const LoadingImages = props => {
  return props.images
    ? ImageArtDirection(defaultPropsArtDirection)
    : Image(props);
};

LoadingImages.propTypes = propTypes;
LoadingImages.defaultProps = defaultProps;

export default LoadingImages;
export {
  propTypes as LoadingImagesPropTypes,
  defaultProps as LoadingImagesDefaultProps
};
