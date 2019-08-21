import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import uuid from "uuid";

/**
 * Defines the prop types
 */
const propTypes = {
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
};

/**
 * Defines the default props
 */
const defaultProps = {
  numberOfRows: 1,
  rowLength: 60,
  content: "/ "
};

/**
 * Styles the component container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the component
 */
const PlaceholderText = props => {
  const { numberOfRows, rowLength, content } = props;
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

PlaceholderText.propTypes = propTypes;
PlaceholderText.defaultProps = defaultProps;

export default PlaceholderText;
export {
  propTypes as PlaceholderTextPropTypes,
  defaultProps as PlaceholderTextDefaultProps
};
