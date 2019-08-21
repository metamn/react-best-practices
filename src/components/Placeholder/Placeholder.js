import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import uuid from "uuid";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The format of the placeholder
   */
  format: PropTypes.oneOf(["text", "svg", "image"]),
  /**
   * The `text` type placeholder
   */
  text: PropTypes.shape({
    /**
     * The number of rows
     */
    numberOfRows: PropTypes.number,
    /**
     * The lenbgth of the rows
     */
    rowLength: PropTypes.number,
    /**
     * The char as the content of a row
     */
    content: PropTypes.string
  })
};

/**
 * Defines the default props
 */
const defaultProps = {
  format: "text",
  text: {
    numberOfRows: 1,
    rowLength: 60,
    content: "/ "
  }
};

/**
 * Styles the component container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays a text placeholder
 */
const PlaceholderText = props => {
  const { text } = props;
  const { numberOfRows, rowLength, content } = text;

  const textRow = Array(rowLength).fill(content);

  return [...Array(numberOfRows)].map((_, i) => {
    /**
     * Generates a random uuid
     */
    const id = uuid.v4();

    return {
      id: id,
      text: textRow
    };
  });
};

/**
 * Displays the component
 */
const Placeholder = props => {
  /**
   * Loads the props
   */
  const { format } = props;

  switch (format) {
    case "text":
    default:
      return PlaceholderText(props);
  }
};

Placeholder.propTypes = propTypes;
Placeholder.defaultProps = defaultProps;

export default Placeholder;
export {
  propTypes as PlaceholderPropTypes,
  defaultProps as PlaceholderDefaultProps
};
