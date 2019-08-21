import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useMarkdown } from "../../hooks";
import { Article as _Article } from "../SemanticHTML";
import PlaceholderText, { PlaceholderTextPropTypes } from "../PlaceholderText";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The imported Markdown file
   */
  file: PropTypes.string,
  /**
   * The placeholder for documentation
   */
  placeholder: PropTypes.shape(PlaceholderTextPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  file: "",
  placeholder: {
    numberOfRows: 10,
    rowLength: 30,
    content: "/ "
  }
};

/**
 * Styles the component container
 */
const Article = styled(_Article)(props => ({}));

/**
 * Displays the component
 */
const Description = props => {
  const { file, placeholder } = props;
  const placeholderText = PlaceholderText(placeholder);
  const markdown = useMarkdown({ file: file, placeholder: placeholderText });

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
