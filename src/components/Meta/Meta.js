import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The page title
   */
  title: PropTypes.string,
  /**
   * The page url
   */
  url: PropTypes.string,
  /**
   * The page description
   */
  description: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  title: "React Best Practices",
  url: "http://localhost:3000/",
  description: "An ongoing experiment on React best practices"
};

/**
 * Displays the component
 */
const Meta = props => {
  const { title, url, description } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="url" content={url} />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Helmet>
  );
};

Meta.propTypes = propTypes;
Meta.defaultProps = defaultProps;

export default React.memo(Meta);
export { propTypes as MetaPropTypes, defaultProps as MetaDefaultProps };
