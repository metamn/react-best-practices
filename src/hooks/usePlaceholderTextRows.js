import { useMemo } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The number of rows
   */
  numberOfRows: PropTypes.number,
  /**
   * The length of the rows
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
 * Returns a text placeholder
 *
 * @param  {Object} props The placeholder props
 * @return {Object}       The placeholder object
 */
const usePlaceholderTextRows = props => {
  /**
   * Loads props
   */
  const { numberOfRows, rowLength, content } = props;

  /**
   * Generates a text row
   */
  const textRow = useMemo(
    () => [...Array(rowLength)].map(i => content).join(""),
    [content, rowLength]
  );

  /**
   * Generates the text rows
   */
  const textRows = useMemo(
    () =>
      [...Array(numberOfRows)].map(i => {
        /**
         * Generates a random uuid
         */
        const id = uuid.v4();

        return {
          id: id,
          text: textRow
        };
      }),
    [numberOfRows, textRow]
  );

  return textRows;
};

export default usePlaceholderTextRows;

export {
  propTypes as PlaceholderTextPropTypes,
  defaultProps as PlaceholderTextDefaultProps
};
