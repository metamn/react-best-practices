import {useMemo} from 'react';
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

const usePlaceholderTextRows = ({ numberOfRows = 1, rowLength = 60, content = "/ " }) => {
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

export {
    propTypes as PlaceholderTextPropTypes
};

export default usePlaceholderTextRows;
