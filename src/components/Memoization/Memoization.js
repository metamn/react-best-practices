import React from "react";
import styled from "styled-components";
import Repeat from "../Repeat";

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
const Memoization = props => {
  return (
    <Container className="Memoization">
      <ul>
        <Repeat numberOfTimes={10} startAt={0}>
          {i => <li key={i}>Item #{i}</li>}
        </Repeat>
      </ul>
    </Container>
  );
};

Memoization.propTypes = propTypes;
Memoization.defaultProps = defaultProps;

export default Memoization;
export {
  propTypes as MemoizationPropTypes,
  defaultProps as MemoizationDefaultProps
};
