import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useMarkdown } from "../../hooks";
import { Article as _Article } from "../SemanticHTML";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The imported Markdown file
   */
  file: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  file: ""
};

/**
 * Styles the component container
 */
const Article = styled(_Article)(props => ({}));

/**
 * Displays the component
 */
const Description = props => {
  const { file } = props;
  const markdown = useMarkdown(file);

  return (
    <Article className="Description" title="Description">
      {markdown}
    </Article>
  );
};

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;
export {
  propTypes as DescriptionPropTypes,
  defaultProps as DescriptionDefaultProps
};
