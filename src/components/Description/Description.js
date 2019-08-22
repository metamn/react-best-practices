import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { stringify } from "flatted";

import { useMarkdown } from "../../hooks";

import PlaceholderText, { PlaceholderTextPropTypes } from "../PlaceholderText";
import { Article as _Article } from "../SemanticHTML";

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
const Article = styled(_Article)(props => ({
  margin: "var(--lem) 0"
}));

/**
 * Displays the component
 */
const Description = props => {
  const { file, placeholder } = props;

  /**
   * Generates the placeholder
   */
  const placeholderText = PlaceholderText(placeholder);

  /**
   * Converts the placeholder to a string
   */
  const placeholderTextToString = placeholderText
    .map(item => item.text + "\n\n")
    .join("");

  /**
   * Loads the markdown file
   */
  const markdown = useMarkdown({
    file: file,
    placeholder: placeholderTextToString
  });

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
